#### 1 Data Wrangling

# Loading Data -----------------------------------------------------------------
## Loading packages
require(pacman)
p_load('tidyverse','psych','rjson','data.table', 'xlsx')
options(scipen=999, max.print = 9999)

## Set working directory to source file location
setwd(dirname(rstudioapi::getSourceEditorContext()$path))

## Set relative paths
data_path <- "data/"
output_path <- "output/"

## Reading in data
json_file <- paste0(data_path, "jatos_results_data_20250502074753.txt")

read_file(json_file) %>%
  # ... split it into lines ...
  str_split('\n') %>% first() %>%
  # ... filter empty rows ...
  discard(function(x) x == '') %>%
  # ... parse JSON into a data.frame
  map_dfr(jsonlite::fromJSON, flatten=T) -> data

rm(json_file)

#### creating ID variable
data$ID <- NA
data$prolific_id <- NA

tmp_IDcounter <- 0
for(i in 1:nrow(data)){
  if(!is.na(data$sender[i]) && data$sender[i] == "Greetings"){
    tmp_IDcounter = tmp_IDcounter + 1
  }
  data$ID[i] <- tmp_IDcounter
}

# checking length of unique IDs
length(unique(data$ID))
length(unique(data$PROLIFIC_PID[!is.na(data$PROLIFIC_PID)])) # onlyTestMe




# Creating response matrices ---------------------------------------------------
### Feedback data
df_feedback <- data %>%
  select(ID, sender, Vignette, improvement_critic)

df_feedback <- df_feedback[!is.na(df_feedback$improvement_critic),]
df_feedback <- df_feedback[nchar(df_feedback$improvement_critic) >= 1,]
df_feedback <- df_feedback %>%
  mutate(sender = ifelse(is.na(sender), paste0("Vig_", as.character(Vignette)), sender))
df_feedback$Vignette <- NULL


table(df_feedback$sender)

xlsx::write.xlsx2(x = df_feedback, file =  file.path(output_path, "feedbackData.xlsx"))
write.csv(x = df_feedback, file.path(output_path, "feedbackData.csv"), row.names = FALSE)
