export class LocalStorage {
    setData(key, data) {}

    getData(key) {
        const datas = localStorage.getItem(key)
        if (datas !== null) {
            return datas;
        }

        throw new Error('No data were found for ', key)
    }

    removeItem(key, item) {}

    removeKey(key) {}
}