# ==============================================================================
# R-Code - CAM
# date of creation: December 2021
# authors: Julius Fenn
# function: draw_CAM()
# ==============================================================================

############################################################################
# aggregate_CAMs()
#
############################################################################
### args:
# dat_merged = CAMfiles[[3]]
# dat_nodes = CAMfiles[[1]]
# ids_CAMs = sel_ids # sample(x = unique(CAMfiles[[1]]$CAM), size = 5, replace = FALSE)
aggregate_CAMs <- function(dat_merged = CAMfiles[[3]],
                           dat_nodes = CAMfiles[[1]],
                           ids_CAMs = NULL){

  ## check for identical IDs
 if(!all(dat_merged$CAM.x %in% dat_nodes$CAM)){
   cat("Your IDs of the two dataset you specified are not perfectly matching: \n")
   stop("> please respecify the \"dat_merged\" AND / OR \"dat_nodes\" argument")
 }

if(!all(ids_CAMs %in% dat_nodes$CAM)){
  print("aggregate_CAMs: using participant CAM ids")
  dat_merged$CAM.x <- dat_merged$participantCAM.x
  dat_nodes$CAM <-   dat_nodes$participantCAM
}

  ## check ids_CAMs argument + create ids_CAMs
  if(length(ids_CAMs) == 1 && ids_CAMs == "all"){
    ids_CAMs <- unique(dat_merged$CAM.x)
  }else if(is.character(ids_CAMs) && !all(ids_CAMs %in% unique(dat_merged$CAM.x))){
    cat("Your specified ids are:", ids_CAMs, ", which is / are not matching the ids of the dataset (seperated by '//'):" ,"\n")
    cat(paste0(unique(dat_merged$CAM.x), collapse = " // "), "\n")
    stop("> Redefine ids")
  }


  ### create subsets:
  sel_dat_nodes <- dat_nodes[dat_nodes$CAM %in% ids_CAMs, ]
  sel_dat_nodes$value[sel_dat_nodes$value==10] <- 0


  ## redraw CAMs
  sel_drawn_CAM <- draw_CAM(dat_merged = dat_merged,
                        dat_nodes = dat_nodes,ids_CAMs = ids_CAMs, plot_CAM = FALSE,
                        relvertexsize = 5,
                        reledgesize = 1)

  if(any(colnames(sel_dat_nodes) == "text_summarized")){
    print("text_summarized column identified")
    sel_dat_nodes$text_backup <- sel_dat_nodes$text
    sel_dat_nodes$text <- sel_dat_nodes$text_summarized
  }



  adjmat <- matrix(data = 0, nrow = length(unique(sel_dat_nodes$text)),
                   ncol = length(unique(sel_dat_nodes$text)))

  rownames(adjmat) <- unique(sel_dat_nodes$text)
  colnames(adjmat) <- unique(sel_dat_nodes$text)

  multigraph_edgelist <- data.frame(matrix(ncol = 3, nrow = 0))

  for(i in 1:length(sel_drawn_CAM)){

    ## add 1 to the diagonal
    diag(adjmat[rownames(adjmat) %in% V(sel_drawn_CAM[[i]])$label, colnames(adjmat) %in% V(sel_drawn_CAM[[i]])$label]) <-
      diag(adjmat[rownames(adjmat) %in% V(sel_drawn_CAM[[i]])$label, colnames(adjmat) %in% V(sel_drawn_CAM[[i]])$label]) + 1

    ## add 1 if edges are connected
    tmp_labels <- cbind(V(sel_drawn_CAM[[i]])$name, V(sel_drawn_CAM[[i]])$label)
    tmp_edges <- as_edgelist(sel_drawn_CAM[[i]])

    # if all connections are bidirectional, mirror the edge list
    if(!igraph::is_directed(graph = sel_drawn_CAM[[i]])){
      tmp_edges <- rbind(tmp_edges,
                         cbind(tmp_edges[,2], tmp_edges[,1]))
    }

    for(j in 1:nrow(tmp_labels)){
      tmp_edges[,1][tmp_edges[,1] %in% tmp_labels[j,1]] <- tmp_labels[j,2]
      tmp_edges[,2][tmp_edges[,2] %in% tmp_labels[j,1]] <- tmp_labels[j,2]
    }

    for(k in 1:nrow(tmp_edges)){
      adjmat[rownames(adjmat) == tmp_edges[k,1], colnames(adjmat) == tmp_edges[k,2]] <-
        adjmat[rownames(adjmat) == tmp_edges[k,1], colnames(adjmat) == tmp_edges[k,2]] + 1
    }

    # we'll use participant CAM ID as identifier for the layer for now
    tmp_layer <- rep(names(sel_drawn_CAM[i]), nrow(tmp_edges))
    tmp_multigraph_edgelist <- cbind(tmp_edges, tmp_layer)

    # append it to the collector data frame
    multigraph_edgelist <- rbind(multigraph_edgelist, tmp_multigraph_edgelist)
  }


  g_agg <- graph_from_adjacency_matrix(adjmat, mode = "directed", diag = FALSE)
  # E(g_agg)$weight
  # vertex.attributes(g_agg)

  # sel_dat_nodes$shape[names(V(g_agg)) == sel_dat_nodes$title]


  V(g_agg)$color <- NA
  V(g_agg)$value <- NA

  for(i in 1:length(V(g_agg)$name)){
    tmp_value <- sel_dat_nodes[sel_dat_nodes$text == V(g_agg)$name[i], ]$value
    tmp_value <- mean(as.numeric(tmp_value))

    ## mean valence
    V(g_agg)$value[i] <- tmp_value
    ## color
    if(tmp_value == 0){
      V(g_agg)$color[i] <- "yellow"
    }else if(tmp_value < 0){
      V(g_agg)$color[i] <- "red"
    }else if(tmp_value > 0){
      V(g_agg)$color[i] <- "green"
    }


  }

  ### title color vertex attributes:
  V(g_agg)$label.color <- "black" # text black

  ### title font vertex attributes:
  V(g_agg)$label.font <- 1 # 2 = bold



  # re-draw the CAMs with signed weights, i.e. not as absolute values
  # @julius maybe this isn't necessary and it's just fine to call draw_CAMs() above
  # with absWeights = FALSE? I didn't want to break anything.

  # uncomment this snippet to allow negative edge weights:
  #sel_drawn_CAM <- draw_CAM(dat_merged = dat_merged,
  #                      dat_nodes = dat_nodes,ids_CAMs = ids_CAMs, plot_CAM = FALSE,
  #                      relvertexsize = 5,
  #                      reledgesize = 1,
  #                      absWeights = FALSE)

  multigraph_adj_matrix_list <- list()

  for(i in 1:length(sel_drawn_CAM)){
    tmp_adjmat <- matrix(data = 0, nrow = length(unique(sel_dat_nodes$text)),
                         ncol = length(unique(sel_dat_nodes$text)))

    rownames(tmp_adjmat) <- unique(sel_dat_nodes$text)
    colnames(tmp_adjmat) <- unique(sel_dat_nodes$text)

    ## add 1 if edges are connected
    tmp_labels <- cbind(V(sel_drawn_CAM[[i]])$name, V(sel_drawn_CAM[[i]])$label)
    tmp_edges <- as_edgelist(sel_drawn_CAM[[i]])

    tmp_weighted_edges <- as_data_frame(sel_drawn_CAM[[i]])



    # if all connections are bidirectional, mirror the edge list
    if(!igraph::is_directed(graph = sel_drawn_CAM[[i]])){
      # since it's an unweighted graph we need a symmetric adjacency matrix
      # -> duplicate the edges with switched "from" and "to"
      tmp_weighted_edges_reverse <- as_data_frame(sel_drawn_CAM[[i]]) %>% rename(from = to, to = from)
      tmp_weighted_edges <- rbind(tmp_weighted_edges, tmp_weighted_edges_reverse)
    }

    for(j in 1:nrow(tmp_labels)){
      #tmp_edges[,1][tmp_edges[,1] %in% tmp_labels[j,1]] <- tmp_labels[j,2]
      #tmp_edges[,2][tmp_edges[,2] %in% tmp_labels[j,1]] <- tmp_labels[j,2]
      tmp_weighted_edges$from[tmp_weighted_edges$from %in% tmp_labels[j,1]] <- tmp_labels[j,2]
      tmp_weighted_edges$to[tmp_weighted_edges$to %in% tmp_labels[j,1]] <- tmp_labels[j,2]
    }

    for(k in 1:nrow(tmp_weighted_edges)){
      tmp_adjmat[rownames(tmp_adjmat) == tmp_weighted_edges[k, "from"], colnames(tmp_adjmat) == tmp_weighted_edges[k, "to"]] <-
        tmp_weighted_edges[k, "weight"]
    }

    # we'll use participant CAM ID as identifier for the layer for now

    # append it to the collector data frame
    multigraph_adj_matrix_list[[names(sel_drawn_CAM[i])]] <- tmp_adjmat
  }


  # names for the multigraph edgelist
  names(multigraph_edgelist) <- c("node1", "node2", "layer")

  out_list <- list(adjmat, g_agg, sel_dat_nodes, multigraph_edgelist, multigraph_adj_matrix_list)

  return(out_list)
}
