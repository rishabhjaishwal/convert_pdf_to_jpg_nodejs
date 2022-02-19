# convert_pdf_to_jpg_nodejs
Script can be used to convert pdf into image jpeg (required ImageMagick-6)

## Installation process

- ImageMagick-6 need to be already installed in your system
- Update ImageMagick-6 policy.xml with our updated policy.xml
- create "**input**" named folder where script pdf_to_jpg.js is available
- put all your pdf files in "**input**" folder

```
// folder structure
├── input/
└── pdf_to_jpg.js
```

## default command
```
  node pdf_to_jpg.js
```

### command with dpi
```
  node pdf_to_jpg.js dpi=300
```

### command with quality
```
  node pdf_to_jpg.js quality=300
```

### command with both dpi and quality

```
  node pdf_to_jpg.js dpi=300 quality=300
```
