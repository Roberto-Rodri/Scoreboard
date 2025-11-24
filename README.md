# Impostor-Grammar-System: Hybrid Gamification Platform

---

## 📋 About The Project

**Impostor-Grammar-System** es una plataforma de gamificación híbrida diseñada para capturar, procesar y visualizar métricas de rendimiento académico en tiempo real. Desarrollado para una feria de inglés, este sistema resuelve la necesidad de conectar actividades físicas (competencias de gramática) con una visualización digital inmersiva.

El núcleo del proyecto es la integración de datos cross-platform: capturamos tiempos de precisión milimétrica en una interfaz web y los renderizamos instantáneamente en un entorno 3D dentro de **Roblox**, creando un "Leaderboard" competitivo y dinámico para los estudiantes.

---

## 🏗️ Data Architecture & Workflow

Como sistema centrado en datos, la integridad y velocidad de la información son prioritarias. El flujo de datos sigue una arquitectura cliente-servidor desacoplada:

### Data Flow
1.  **Data Ingestion (Web Client):** El administrador registra el tiempo de finalización del estudiante mediante un cronómetro web de alta precisión.
2.  **Persistence Layer (SQL):** Los datos son enviados via API REST a una base de datos SQL centralizada.
3.  **Data Retrieval (Roblox Client):** El entorno de Roblox, mediante scripts en Luau y `HttpService`, realiza consultas periódicas (polling) a la base de datos.
4.  **Visualization:** Los datos crudos se transforman en objetos 3D ordenados por rendimiento (ranking) dentro del "Dark Room Dashboard".

### Database Schema
La estructura de datos está normalizada para permitir consultas rápidas de ordenamiento (`ORDER BY completion_time ASC`).

**Table: `competitors_metrics`**

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | `INT` | `PK, AUTO_INCREMENT` | Identificador único del registro. |
| `nickname` | `VARCHAR(50)` | `NOT NULL` | Gamertag o nombre del estudiante. |
| `score` | `FLOAT` | `NOT NULL` | Tiempo registrado en milisegundos/segundos. |

---

## 💻 Tech Stack

### Frontend (Data Entry)
* **HTML5 / CSS3:** Interfaz responsiva para el cronómetro.
* **JavaScript (ES6+):** Lógica del cronómetro y manejo de peticiones `fetch` hacia el backend.

### Backend & Storage
* **SQL (MySQL/SQLite):** Motor de base de datos relacional.
* **Python/PHP (Middleware):** API encargada de recibir los POST de la web y servir los JSON al cliente de Roblox.

### Visualization (3D Environment)
* **Roblox Studio:** Motor gráfico.
* **Luau:** Lenguaje de scripting para la manipulación de GUI y llamadas HTTP (`HttpService`) dentro del juego.

---

## 🚀 Features

* **⏱️ Precision Timer Web Interface:** Herramienta de captura de datos libre de latencia para los jueces de la feria.
* **💾 Persistent Data Storage:** Garantiza que ningún puntaje se pierda, incluso si el servidor de visualización se reinicia.
* **🏆 "Dark Room Dashboard" (Roblox):**
    * Visualización inmersiva del Top 10 global.
    * Actualización en tiempo casi real.
    * Diseño temático basado en "Among Us" / Sci-Fi.

---

## ⚙️ Setup & Installation

Sigue estos pasos para desplegar el entorno de desarrollo localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Roberto-Rodri/Scoreboard.git](https://github.com/Roberto-Rodri/Scoreboard.git)
    ```
2.  **Base de Datos:**
    * Importa el script `schema.sql` en tu servidor SQL local.
    * Configura las credenciales en el archivo de conexión del backend.
3.  **Backend API:**
    * Asegúrate de que tu servidor web (Apache/Nginx/Python Server) esté corriendo y sea accesible.
4.  **Roblox:**
    * Abre el archivo `.rbxl` en Roblox Studio.
    * Habilita los permisos de **HTTP Requests** en: `Game Settings` > `Security` > `Allow HTTP Requests`.
    * Actualiza la URL del endpoint en el script `LeaderboardController`.

---

## 🎮 Usage Flow

1.  El estudiante participa en el desafío de gramática en inglés.
2.  Al finalizar, el juez detiene el cronómetro en la **WebApp** e ingresa el `Nickname` del estudiante.
3.  Al presionar "Guardar", los datos viajan a la nube.
4.  Automáticamente, en la pantalla gigante (proyectando el juego de **Roblox**), el nombre del estudiante aparece en el tablero de posiciones si su tiempo fue lo suficientemente bueno.

---

<div align="center">

**[Explorar Repositorio](https://github.com/Roberto-Rodri/Scoreboard.git)**

Desarrollado con ❤️ por Roberto Rodri

</div>
