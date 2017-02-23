
export default function (method, url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = xhr.responseText;
                callback(JSON.parse(response));
            }
        }
    };

    xhr.open(method, url, true);
    xhr.send(null);
}
