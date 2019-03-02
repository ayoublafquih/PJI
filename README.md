#Build image  

docker build -t uploadfile .

# Run container  

docker run -p 4200:80 uploadfile