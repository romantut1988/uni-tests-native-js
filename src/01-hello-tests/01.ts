export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(" ")

    return words.filter(w => w !== "" && w !== "-")
        .map(w => w
            .replace("!", "")
            .replace(".", "")
            .replace(",", "")
        )
}
