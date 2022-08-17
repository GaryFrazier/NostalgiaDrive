
export function getVideos() {
    let testData = {
        popular: ["dTn8pKWTohw", "Vfe5g0twoXk", "H5D3d4_O0e4"],
        random: ["Vfe5g0twoXk"],
        favorites: ["H5D3d4_O0e4"],
    }
    return Promise.resolve(testData)
        .then(data => data)
}