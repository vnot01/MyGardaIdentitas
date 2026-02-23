FROM nginx:alpine

# Menyalin semua file statis ke direktori default Nginx
COPY . /usr/share/nginx/html

# Expose port 80 (internal container)
EXPOSE 80
