download.file(
  "https://raw.githubusercontent.com/stedy/Machine-Learning-with-R-datasets/master/mushrooms.csv",
  destfile = "Mushroom.csv"
)

mushroom <- read.csv("Mushroom.csv", na.strings = "?")
head(mushroom, 5)

train_test_split <- function(data, ratio) {
  idx <- sample(c(TRUE, FALSE), nrow(data), replace = TRUE, prob = c(ratio, 1 - ratio))
  train <- data[idx, ]
  test <- data[!idx, ]
  return(list("train"=train, "test"=test))
}

split <- train_test_split(mushroom, 0.7)
c(nrow(split$train), nrow(split$test))

install.packages("naivebayes")
library(naivebayes)

nb <- naive_bayes(type ~ ., split$train)

test <- split$test
p <- predict(nb, test)
tab <- table(p, split$test$type)
tab

sum(diag(tab) / sum(tab))
