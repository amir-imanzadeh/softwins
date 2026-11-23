#!/bin/bash

echo "Welcome to Soft program"

file_name="soft-v-1-0-0-linux.zip"
install_dir="/opt/softwins"



sudo curl -L -o "$file_name" "http://softwins.ir/download/soft/$file_name"


sudo mkdir -p "$install_dir"

sudo mv "$file_name" "$install_dir"

cd "$install_dir"

if sudo unzip -o -q "$file_name" -d "$install_dir"; then
    echo "unzip was good"

    if cd ./soft && sudo node index.js; then
        sudo tee /usr/local/bin/soft > /dev/null <<'EOF'
#!/bin/bash

node /opt/softwins/soft/index.js "$@"
EOF

        sudo chmod +x /usr/local/bin/soft
        echo "Soft installed!"
    else
        echo "Soft installation failed!"
        exit 1
    fi
else
    echo "unzip wasn't good!"
    exit 1
fi

