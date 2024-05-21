def print_partition(partition, partitions, names, parameter_estimates, type="singlelayer"):
    if type == "singlelayer":
        part_index = 2
        gamma_index = 2
    else:
        part_index = -3
        gamma_index = -2
        
  
    print("------------------------------------------------------------------------")
    print("PARTITION with", max(partition) + 1, "COMMUNITIES:")
    print("------------------------------------------------------------------------")
    
    for x in parameter_estimates:
        if x[part_index] == partition:
            print("GAMMA = ", x[gamma_index])
            if(type == "multilayer"):
                print("OMEGA = ", x[-1])
                
    if type == "singlelayer":
        for community in sorted(set(partition)):
            indices = []
            for i, j in enumerate(partition):
                if j == community:
                    indices += [i]
            print("------------------------------------------------------------------------")
            print("COMMUNITY", community, "with", len(indices), "nodes:")
            community_names = []
            for i in indices:
                community_names += [names[i]]
            print(set(community_names))

    # print communities in multilayer: to be implemented