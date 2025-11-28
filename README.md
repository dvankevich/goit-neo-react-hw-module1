# goit-neo-react-hw-module1

## create component file structure
comp-create.sh
```bash
#!/bin/bash

# Перевірка, чи передано хоча б один аргумент
if [ "$#" -eq 0 ]; then
    echo "Використання: $0 <name1> <name2> ... <nameN>"
    exit 1
fi

# Проходимо через всі аргументи
for name in "$@"; do
    # Створюємо підкаталог
    mkdir "$name"

    # Створюємо файли в підкаталозі
    touch "$name/$name.jsx"
    touch "$name/$name.module.css"

    echo "Каталог '$name' і файли '$name.jsx' та '$name.module.css' створено."
done
```
run script
```
cd src/components

comp-create.sh Profile FriendList
```
result
```
├── FriendList
│   ├── FriendList.jsx
│   └── FriendList.module.css
└── Profile
    ├── Profile.jsx
    └── Profile.module.css
```