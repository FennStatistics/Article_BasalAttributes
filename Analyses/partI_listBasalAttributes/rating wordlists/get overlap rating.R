setwd(dirname(rstudioapi::getSourceEditorContext()$path))  # sets the directory of location of this script as the current directory

rm(list=ls(all=TRUE))
graphics.off()
dir()

library(xlsx)
dat <- xlsx::read.xlsx(file = "01_ratingOriginalList_AB.xlsx", sheetIndex = 1, encoding = "UTF-8")
head(dat)

table(dat$Rating.A..0.for.no..1.for.maybe.and.2.for.yes.)
table(dat$Rating.B..0.for.no..1.for.maybe.and.2.for.yes.)

dat$NA. <- NULL
colnames(dat) <- c("Attribut",
                   "Rating_A", "Rating_A_Comment",
                   "Rating_B", "Rating_B_Comment",
                   "Inclue_final", "Inclue_final_Comment",
                   "Definition_needed", "ToDO",
                   "Relations", "Superordinates")




table(dat$Rating_A)
table(dat$Rating_B)


table(dat$Rating_A, dat$Rating_B)
chisq <- chisq.test(table(dat$Rating_A, dat$Rating_B))
chisq

cv.test = function(x,y) {
  CV = sqrt(chisq.test(x, y, correct=FALSE)$statistic /
              (length(x) * (min(length(unique(x)),length(unique(y))) - 1)))
  print.noquote("Cramér V / Phi:")
  return(as.numeric(CV))
}
with(dat, cv.test(Rating_A, Rating_B))


report::report(chisq)

library(corrplot)
corrplot(chisq$residuals, is.cor = FALSE)

# Contibution in percentage (%)
contrib <- 100*chisq$residuals^2/chisq$statistic
round(contrib, 3)

# Visualize the contribution
corrplot(contrib, is.cor = FALSE)


###########################################################
dat$Attribut[dat$Rating_A == 2 & dat$Rating_B == 2]

dat$Attribut[dat$Rating_A == 0 & dat$Rating_B == 2]

