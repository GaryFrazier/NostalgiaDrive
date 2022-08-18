
export function getVideos() {
    let testData = {
        popular: [{ liked: 0, favorite: false, id: "dTn8pKWTohw" }, { liked: 1, favorite: true, id: "Vfe5g0twoXk" }, { liked: -1, favorite: false, id: "H5D3d4_O0e4" }],
        random: [{ liked: 0, favorite: false, id: "Vfe5g0twoXk" }],
        favorites: [{ liked: 0, favorite: false, id: "H5D3d4_O0e4" }],
    }
    return Promise.resolve(testData)
        .then(data => data)
}