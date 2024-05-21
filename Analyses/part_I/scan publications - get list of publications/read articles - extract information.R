# sets the directory of location of this script as the current directory
setwd(dirname(rstudioapi::getSourceEditorContext()$path))

rm(list=ls(all=TRUE))
graphics.off()


library(tidyverse)
library(pdftools)
library(tm)
library(xlsx)


library(topicmodels)
library(quanteda)

################################
# read in articles
################################
setwd("DOWNLOAD")

### list files
files <- list.files(pattern = "pdf$")
length(files)




### read articles as corpora
articles_corpus <- Corpus(URISource(x = files, encoding = "UTF-8"),
               readerControl = list(reader = readPDF))

articles_corpus_tdm <- TermDocumentMatrix(articles_corpus,
                                   control =
                                     list(removePunctuation = TRUE,
                                          stopwords = TRUE,
                                          tolower = TRUE,
                                          stemming = FALSE,
                                          removeNumbers = TRUE,
                                          bounds = list(global = c(3, Inf)),
                                          wordLengths = c(4, 30))) # !!!

inspect(articles_corpus_tdm[1:10,])
hist(nchar(x = articles_corpus_tdm$dimnames$Terms))
# sum(nchar(x = articles_corpus_tdm$dimnames$Terms) <= 3)
# articles_corpus_tdm$dimnames$Terms[nchar(x = articles_corpus_tdm$dimnames$Terms) > 20]



################################
# get PDFs with specific terms
################################
if(!file.exists("findings")){
  dir.create("findings")
}
setwd("findings")



##### search soft robot
wordsFound <- str_subset(string = rownames(articles_corpus_tdm),
                         pattern = "softrobo")
wordsFound
tmp <- as.matrix(articles_corpus_tdm[wordsFound,])
rownames(tmp)
tmp <- tmp[, colSums(x = tmp) > 0]; ncol(tmp)
colnames(tmp)

if(!file.exists(paste0(wordsFound, collapse = "_"))){
  dir.create(paste0(wordsFound, collapse = "_"))
  setwd(paste0(wordsFound, collapse = "_"))

  tmp_to <- getwd()
  setwd("../..")
  tmp_from <- getwd()

  tmp_hits <- colnames(x = tmp)
  for(i in 1:length(tmp_hits)){
    file.copy(from = paste0(tmp_from, "/", tmp_hits[i]),
              to = paste0(tmp_to))

  }
}


setwd(tmp_to)
write.xlsx2(x = tmp, file = paste0(paste0(wordsFound, collapse = "_"), ".xlsx"))
setwd(tmp_from)



##### search 1
wordsFound <- str_subset(string = rownames(articles_corpus_tdm),
                         pattern = "demonstrator")

tmp <- as.matrix(articles_corpus_tdm[wordsFound,])
rownames(tmp)
tmp <- tmp[, colSums(x = tmp) > 0]; ncol(tmp)
colnames(tmp)

if(!file.exists(paste0(wordsFound, collapse = "_"))){
  dir.create(paste0(wordsFound, collapse = "_"))
  setwd(paste0(wordsFound, collapse = "_"))

  tmp_to <- getwd()
  setwd("../..")
  tmp_from <- getwd()

  tmp_hits <- colnames(x = tmp)
  for(i in 1:length(tmp_hits)){
    file.copy(from = paste0(tmp_from, "/", tmp_hits[i]),
              to = paste0(tmp_to))

  }
}


setwd(tmp_to)
write.xlsx2(x = tmp, file = paste0(paste0(wordsFound, collapse = "_"), ".xlsx"))
setwd(tmp_from)



##### search 2
wordsFound <- str_subset(string = rownames(articles_corpus_tdm),
                         pattern = "prototype|proto-type")

tmp <- as.matrix(articles_corpus_tdm[wordsFound,])
rownames(tmp)
tmp <- tmp[, colSums(x = tmp) > 0]; ncol(tmp)
colnames(tmp)

if(!file.exists(paste0(wordsFound, collapse = "_"))){
  dir.create(paste0(wordsFound, collapse = "_"))
  setwd(paste0(wordsFound, collapse = "_"))

  tmp_to <- getwd()
  setwd("../..")
  tmp_from <- getwd()

  tmp_hits <- colnames(x = tmp)
  for(i in 1:length(tmp_hits)){
    file.copy(from = paste0(tmp_from, "/", tmp_hits[i]),
              to = paste0(tmp_to))

  }
}


setwd(tmp_to)
write.xlsx2(x = tmp, file = paste0(paste0(wordsFound, collapse = "_"), ".xlsx"))
setwd(paste0(tmp_from, "/findings"))

##### search 1+2
wordsFound <- str_subset(string = rownames(articles_corpus_tdm),
                         pattern = "demonstrator|prototype|proto-type")

tmp <- as.matrix(articles_corpus_tdm[wordsFound,])
rownames(tmp)
tmp <- tmp[, colSums(x = tmp) > 0]; ncol(tmp)
colnames(tmp)

if(!file.exists(paste0(wordsFound, collapse = "_"))){
  dir.create(paste0(wordsFound, collapse = "_"))
  setwd(paste0(wordsFound, collapse = "_"))

  tmp_to <- getwd()
  setwd("../..")
  tmp_from <- getwd()

  tmp_hits <- colnames(x = tmp)
  for(i in 1:length(tmp_hits)){
    file.copy(from = paste0(tmp_from, "/", tmp_hits[i]),
              to = paste0(tmp_to))

  }
}


setwd(tmp_to)
write.xlsx2(x = tmp, file = paste0(paste0(wordsFound, collapse = "_"), ".xlsx"))
setwd(paste0(tmp_from, "/findings"))




##### search 3
wordsFound <- str_subset(string = rownames(articles_corpus_tdm),
                         pattern = "scenario|industry partner|technolog* dev|mockup|mock-up")


tmp <- as.matrix(articles_corpus_tdm[wordsFound,])
rownames(tmp)
tmp <- tmp[, colSums(x = tmp) > 0]; ncol(tmp)
colnames(tmp)

if(!file.exists(paste0(wordsFound, collapse = "_"))){
  dir.create(paste0(wordsFound, collapse = "_"))
  setwd(paste0(wordsFound, collapse = "_"))

  tmp_to <- getwd()
  setwd("../..")
  tmp_from <- getwd()

  tmp_hits <- colnames(x = tmp)
  for(i in 1:length(tmp_hits)){
    file.copy(from = paste0(tmp_from, "/", tmp_hits[i]),
              to = paste0(tmp_to))

  }
}


setwd(tmp_to)
write.xlsx2(x = tmp, file = paste0(paste0(wordsFound, collapse = "_"), ".xlsx"))
setwd(paste0(tmp_from, "/findings"))


















################################################################################
################################################################################

#> https://content-analysis-with-r.com/6-topic_models.html
#> https://ladal.edu.au/topicmodels.html


DTM <- as.DocumentTermMatrix(x = articles_corpus_tdm)

result <- ldatuning::FindTopicsNumber(
  DTM,
  topics = seq(from = 2, to = 20, by = 1),
  metrics = c("CaoJuan2009",  "Deveaud2014"),
  method = "Gibbs",
  control = list(seed = 77),
  verbose = TRUE
)



FindTopicsNumber_plot(result)


# number of topics
K <- 20
# set random number generator seed
set.seed(9161)
# compute the LDA model, inference via 1000 iterations of Gibbs sampling
topicModel <- LDA(DTM, K, method="Gibbs", control=list(iter = 500, verbose = 25))



terms(topicModel, 10)


exampleTermData <- terms(topicModel, 1)
exampleTermData[, 1:8]


top5termsPerTopic <- terms(topicModel, 200)
topicNames <- apply(top5termsPerTopic, 2, paste, collapse=" ")
# visualize topics as word cloud
topicToViz <- 11 # change for your own topic of interest
topicToViz <- grep('demonstrator', topicNames)[1] # Or select a topic by a term contained in its name
topicToViz
# select to 40 most probable terms from the topic by sorting the term-topic-probability vector in decreasing order
top40terms <- sort(tmResult$terms[topicToViz,], decreasing=TRUE)[1:40]
words <- names(top40terms)
# extract the probabilites of each of the 40 terms
probabilities <- sort(tmResult$terms[topicToViz,], decreasing=TRUE)[1:40]
# visualize the terms as wordcloud
mycolors <- brewer.pal(8, "Dark2")
wordcloud(words, probabilities, random.order = FALSE, color = mycolors)























### read articles as string
# setwd("..")
# articles_text <- lapply(files, pdf_text)
# hist(lapply(articles_text, length))



articles_text <- list()

for(i in 1:length(articles_corpus)){
  articles_text[[i]] <- articles_corpus[[i]]$content
}

hist(sapply(articles_text, length))


### read articles as corpora
articles_corpus <- Corpus(URISource(x = files, encoding = "UTF-8"),
                          readerControl = list(reader = readPDF))

n.topics <- 10

articles_text_corpus <- quanteda::corpus(x = articles_text)

articles_dfm <- quanteda::dfm(articles_text,
                              tolower = TRUE,
                              remove_numbers = TRUE,
                              remove_punct = TRUE,
                              remove_symbols = TRUE, remove = c(stopwords("english")))
dfm2topicmodels <- quanteda::convert(articles_text, to = "topicmodels")
lda.model <- topicmodels::LDA(dfm2topicmodels, n.topics)
lda.model
