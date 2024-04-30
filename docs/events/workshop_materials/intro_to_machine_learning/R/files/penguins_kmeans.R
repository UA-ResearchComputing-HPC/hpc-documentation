install.packages("palmerpenguins")
library(palmerpenguins)

summary(penguins)
cat <- c("species", "island", "sex", "year")
plot(penguins[, !(names(penguins) %in% cat)])

df <- data.frame(penguins$bill_length_mm, penguins$bill_depth_mm)

df <- na.omit(df)
cl <- kmeans(df, 3, nstart=10)
plot(df, col=cl$cluster)
points(cl$centers, col=1:3, pch=19, lwd=10)
