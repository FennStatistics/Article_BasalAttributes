# sets the directory of location of this script as the current directory
setwd(dirname(rstudioapi::getSourceEditorContext()$path))

rm(list=ls(all=TRUE))
graphics.off()

library(rvest)
library(tidyverse)
library(xlsx)


URL <- "https://www.livmats.uni-freiburg.de/en/publications"

browseURL(url = URL)
webpage <- read_html(x = URL)
txt <- webpage %>% html_nodes('small , .cms__bodytext a') %>% html_text()


txt[1:10]
str_length(string = txt)
head(cbind(txt, str_length(string = txt)))

articles <- txt[str_length(string = txt) > 15]
articles <- articles[str_detect(string = articles, pattern = "([[:digit:]]+)")]

articles[1:10]

articles <- articles[str_detect(string = articles, pattern = "doi")]



write.xlsx2(x = articles, file = "list_articles.xlsx")
