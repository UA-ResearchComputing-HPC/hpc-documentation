head(airquality, 5)

is.na(2)
is.na(NA)
is.na(c("a", 5, NA))

which(is.na(airquality))
sum(is.na(airquality))

nrow(airquality)
sum(is.na(airquality)) / nrow(airquality)

airquality_no_na <- na.omit(airquality)
sum(is.na(airquality_no_na))
nrow(airquality_no_na)

plot(airquality)
plot(airquality$Ozone~airquality$Temp)
boxplot(airquality)
