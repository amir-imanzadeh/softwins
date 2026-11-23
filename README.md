# Softwins

Docker-based development environment for the softwins project.

## Docker

- Base image: Node.js 22
- OS: Debian Bookworm
- Working directory: /app

   cd /media/amirhoseyn/webcreatix/softwins
   docker run --rm -it --name softwins \
    --network webcreatix \
    -v ./softwins:/app \
    -v softwins_node_modules:/app/node_modules \
    --env-file softwins/.env \
    -w /app \
    -p 3000:3000 \
    node:22-alpine \
    npm run dev -- --hostname 0.0.0.0 --port 3000


فردا باید اول یاد بگیری چطوری فایل و متن رو اپلود کنی ، بعد چطوری روی اون فایل اپلود شده کار کنی و ذخیره کنی و یا بخونیش