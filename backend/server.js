import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

// Подключение к базе данных SQLite
const db = new sqlite3.Database('database.db', (err) => {
    if (err) {
        console.error('Ошибка подключения к БД:', err.message);
    } else {
        console.log('Подключено к SQLite');
    }
});

// Создание таблиц
const createTables = () => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS devices (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            device_type TEXT NOT NULL
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS measurements (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            device_id TEXT NOT NULL,
            volume REAL NOT NULL,
            level REAL NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (device_id) REFERENCES devices(id)
        )`);
    });
};

createTables();

// API: Получение всех устройств
app.get('/devices', (req, res) => {
    db.all('SELECT * FROM devices', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// API: Добавление устройства
app.post('/devices', (req, res) => {
    const { id, name, device_type } = req.body;
    if (!id || !name || !device_type) {
        return res.status(400).json({ error: 'Все поля обязательны' });
    }
    db.run('INSERT INTO devices (id, name, device_type) VALUES (?, ?, ?)', [id, name, device_type], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Устройство добавлено' });
    });
});

// API: Добавление измерения
app.post('/measurements', (req, res) => {
    const { device_id, volume, level } = req.body;
    if (!device_id || volume == null || level == null) {
        return res.status(400).json({ error: 'Все поля обязательны' });
    }
    db.run('INSERT INTO measurements (device_id, volume, level) VALUES (?, ?, ?)', [device_id, volume, level], (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Измерение добавлено' });
    });
});

// API: Получение данных измерений по устройству
app.get('/measurements/:device_id', (req, res) => {
    const { device_id } = req.params;
    db.all('SELECT * FROM measurements WHERE device_id = ? ORDER BY timestamp DESC', [device_id], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
