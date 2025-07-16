const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // 允许前端跨域

// 指定保存路径为 public/uploads
const storage = multer.diskStorage({


    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/uploads')); // 保存位置
    },
    filename: (req, file, cb) => {
        const userId = req.query.userId || 'anonymous';
        const uniqueName = Date.now() + '-' + userId + '.jpg';
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.post('/upload', upload.single('file'), (req, res) => {
    console.log('收到上传请求：');
    console.log('userId（来自 query）:', req.query.userId);
    console.log('req.file:', req.file);
    const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;
    res.send({ url: fileUrl }); // 返回图片访问 URL
});

app.listen(5000, () => {
    console.log('✅ 上传服务已启动：http://localhost:5000');
});
