# Frontend – FEP: Financement entre particuliers
---

## Tools
- **Angular 17** (`--no-standalone`)
- **TypeScript**
- **PrimeNG** + **Angular Material**
- **RxJS**
- **HTML5 / SCSS**
- **REST API** via `HttpClient`

---

## ⚙️ Installation

1. **Clone project**
```bash
git clone https://gitlab.com/ton-compte/loan-refund-frontend.git
cd loan-refund-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Install dependencies**
```bash
ng serve
```

4**Launch prod environment**
```bash
docker compose down    
docker compose -f docker-compose.prod.yml up --build
```

5**Launch dev environment**
```bash
docker compose -f docker-compose.dev.yml up --build
```
