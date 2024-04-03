<link rel="stylesheet" href="../../../../assets/stylesheets/embedded_files.css">

# Machine Learning in R

## Training Documents

<center>
[Click here to download PDF Version](files/ML-with%20R.pdf){ .md-button }
</center>

<center>
[Click here to download PowerPoint Version](files/ML-with%20R.pptx){ .md-button }
</center>


## Video Presentation

**Will upload once on YouTube**

<!-- MP4s are too large to store in git repos. Need to upload to youtube. 
This hasn't been done, so I'll put the formatting below to prepare

<div class="auto-resizable-iframe">
  <div>
    <iframe frameborder="0" allowfullscreen="" src="https://www.youtube.com/embed/<ID HERE>"></iframe>
  </div>
</div>

-->

## Interactive Materials

### Exercise: Data Pre-processing

```
# install package “VIM”
install.packages("VIM")
# Hint: use multiple cores. It goes much faster
# To use the package in an R session, we need to load it in an R session via
library()
library(VIM)
# Load dataset “sleep”, which comes within the package “VIM”
data(sleep, package ="VIM")
# call function head() to get a feeling about data, or call sleep to see all values
head(sleep)
# download package “mice” and load it into R
install.packages("mice")
library(mice)

# First, we need to know how many rows in “sleep”
nrow(sleep)
## [1] 62
# We use complete.cases() or na.omit() to see tuples without missing value.
sleep[complete.cases(sleep),]
# or try
na.omit(sleep)
# Count the number of rows without missing value
nrow(sleep[complete.cases(sleep),])
## [1] 42
# To reverse the condition logic (rows containing one or more missing value), we
use the exclamation mark highlighted in Red
sleep[!complete.cases(sleep),]
nrow(sleep[!complete.cases(sleep),])
## [1] 20

# Check how many observations contain missing value in column “Dream”
sum(is.na(sleep$Dream))
## [1] 12
# About 19% of obs (observations) in column Dream contain missing value
mean(is.na(sleep$Dream))
## [1] 0.1935484
# 32% obs in data frame sleep containing one or more missing value
mean(!complete.cases(sleep))
## [1] 0.3225806

# call function md.pattern(). Make sure you loaded package mice into R first
md.pattern(sleep)
```

### Exercise: Visualization – aggr

```
# call function aggr (), prop = FALSE convert percentage value into counts
aggr(sleep, prop = FALSE, numbers = TRUE)

# call function marginplot (), pch indicates notation of obs, col tells R how you
would like to see results in different color
marginplot(sleep[c("Gest", "Dream")], pch=c(20),
col = c("darkgray","red","blue") )

boxplot(mpg ~ cyl,
# mpg is the target variable
# cyl is the explanatory variable
data = mtcars,
col = "grey",
main = "Mileage Data",
ylab = "MPG",
xlab = "Number of Cylinders" )
```

### Exercise: Visualization – violin plot

```
install.packages(“vioplot”)
library(vioplot)
v1 <- mtcars$mpg[mtcars$cyl == 4]
v2 <- mtcars$mpg[mtcars$cyl == 6]
v3 <- mtcars$mpg[mtcars$cyl == 8]
# draw violin plots for vectors
vioplot(v1,v2,v3,
names=c(“4 cylinders”, “6 cylinders”, “8 cylinders”),
col=“gold”)
```

### Exercise: Visualization – scatter plot

```
plot(mpg ~ wt, data = mtcars)
```

### Exercise: Naive Bayes Classifier

```
getwd()
setwd(‘/xdisk/chrisreidy/workshops’)

install.packages(‘e1071’)
library(e1071)

# read in csv file mushroom.csv. Note the question mark
represents null value
mushroom <- read.csv(“Mushroom.csv”, na.strings = “?”)
summary(mushroom)

# check completion
nrow(mushroom[!complete.cases(mushroom),])
## [1] 2480

# we can retain observations that do not contain NA(null) value
mushroom = mushroom[complete.cases(mushroom),]

# 70% of original data will be used for training
sample_size <- floor(0.7 * nrow(mushroom))
# randomly select index of observations for training
training_index <- sample(nrow(mushroom), size = sample_size,
replace = FALSE)
train <- mushroom[training_index,]
test <- mushroom[-training_index,]

# note the period coming after tilde. It means all the other
variables in that dataset will be predictive variable
mushroom.model <- naiveBayes(classes ~ . , data = train)
# We can explore the detail conditional probabilities for each
variables by calling the object mushroom.model itself.
mushroom.model

# The result of prediction, a vector, will be attached to test
set labelled as “class”. The return of prediction is a vector
including predicted type of mushroom
mushroom.predict <- predict(mushroom.model, test, type = “class”)

# pick actual value and predicted value together in a dataframe
called results
results <- data.frame(actual = test[,'classes'], predicted =
mushroom.predict)
# We can get a popular matrix called confusion matrix
table(results)
# columns indicate the number of mushrooms in actual type;
likewise, rows indicate the number those in predicted type.
predicted
actual edible poisonous
edible TN=1067 FP= 2
poisonous FN= 46 TP=580
```

### Exercise: Neural Network

```
install.packages('ISLR')
install.packages('caTools')
install.packages('neuralnet')

library(ISLR)
print(head(College, 2))

# Create Vector of Column Max and Min Values
maxs <- apply(College[,2:18], 2, max)
mins <- apply(College[,2:18], 2, min)# Use scale() and convert the resulting matrix to a data frame
scaled.data <- as.data.frame(scale(College[,2:18], center = mins,
                scale = maxs - mins))

# Check out results
print(head(scaled.data,2))

# Convert Private column from Yes/No to 1/0
Private = as.numeric(College$Private)-1
data = cbind(Private, scaled.data)
library(caTools)
set.seed(101) # sets random numbers# Create Split (any column is fine)
split = sample.split(data$Private, SplitRatio = 0.70)# Split based off split Boolean Vector
train = subset(data, split == TRUE)
test = subset(data, split == FALSE)

feats <- names(scaled.data)
# Concatenate strings
f <- paste(feats,collapse=' + ')
f <- paste('Private ~', f)
# Convert to formula
f <- as.formula(f)
f
## Private ~ Apps + Accept + Enroll + Top10perc + Top25perc + F.Undergrad +
## P.Undergrad + Outstate + Room.Board + Books + Personal +
## PhD + Terminal + S.F.Ratio + perc.alumni + Expend + Grad.Rate
library(neuralnet)
nn <- neuralnet(f, train, hidden = c(10,10,10), linear.output = FALSE)

# Compute Predictions off Test Set
predicted.nn.values <- compute(nn, test[2:18])# Check out net.result
print(head(predicted.nn.values$net.result))

predicted.nn.values$net.result <- sapply(predicted.nn.values$net.result,
                                  round, digits = 0)

table(test$Private, predicted.nn.values$net.result)
plot(nn)
```

