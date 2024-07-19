#Slot-Averaging and Interference models fit to Colorwheel experiment varying set size 1 to 8

setwd(dirname(rstudioapi::getSourceEditorContext()$path))  # sets the directory of location of this script as the current directory

rm(list=ls(all=TRUE))
graphics.off()
dir()


vec_adjectices <- read.table(file = "listAdjectives.txt", header = FALSE)
vec_adjectices <- vec_adjectices$V1

library(tidyverse)
### prepare adjectives

vec_adjectices_adjusted <- c()
h = 1
for(i in 1:length(vec_adjectices)){
  tmp <- str_extract(string = vec_adjectices[i], pattern = "[:alpha:]*")
  if(nchar(tmp) >= 3){
    vec_adjectices_adjusted[h] <- tmp
    h = h + 1
  }
}


vec_adjectices_adjusted <- tolower(vec_adjectices_adjusted)
vec_adjectices_adjusted <- sort(vec_adjectices_adjusted)

## manual adjustements
vec_adjectices_adjusted[vec_adjectices_adjusted == "diﬀerent"] <- "different"
vec_adjectices_adjusted[vec_adjectices_adjusted == "electric"] <- "electronic"

# Create a table of frequencies
word_freq <- table(vec_adjectices_adjusted)

# Convert the table to a data frame
df <- as.data.frame(word_freq)

# Rename the columns
names(df) <- c("word", "frequency")

# Order the data frame by frequency
df <- df[order(df$frequency, decreasing = TRUE), ]

# Display the data frame
df



xlsx::write.xlsx2(x = df, file = "listAdjectives_articles.xlsx")


## check for duplicates
library(stringdist)


vec_adjectices_adjusted <- unique(vec_adjectices_adjusted)

for(i in 1:length(vec_adjectices_adjusted)){
  if(nchar(vec_adjectices_adjusted[i]) >= 6){
    tmp <- stringdist(a = vec_adjectices_adjusted[i], b = vec_adjectices_adjusted, method = "osa")
    tmp <- vec_adjectices_adjusted[tmp <= 2]
    if(length(tmp) > 1){
      cat("\nfor word >>", vec_adjectices_adjusted[i],"<< in row", i, "following similar words were found:\n",
          tmp[tmp != vec_adjectices_adjusted[i]], "\n")
    }
  }
}
