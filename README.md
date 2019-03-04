# Build image  

docker build -t pji .

# Run container  

docker run -it -p 80:80 --rm pji