export async function imageUpload(file,userId) {
    const formData = new FormData();
    formData.append('file', file);

    const resp = await fetch(`http://localhost:5000/upload?userId=` + userId, {
        method: 'POST',
        body: formData,
    });

    const data = await resp.json();
    return {
        url: data.url, // 可用于 <img src={url} />
    };
}
