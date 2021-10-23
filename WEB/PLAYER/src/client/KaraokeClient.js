
export class KaraokeClient {
    constructor() {
        this.host = 'http://localhost:3001'
    }


    async getSongsData() {
        const rawResponse = await fetch(this.host + "/songs/new");
        const parsedResponse = await rawResponse.json();
        console.log(parsedResponse.value)
        return parsedResponse.value;
    }

    async getSong(name) {
        const rawResponse = await fetch(this.host + '/songs/new/' + name);
        const parsedResponse = await rawResponse.json();
        console.log(parsedResponse)
        return parsedResponse;
    }
    async searchLyric(thing) {
        const rawResponse = await fetch(this.host + '/songs/byLyrics?lyrics=' + thing);
        const parsedResponse = await rawResponse.json();
        //console.log(parsedResponse)
        return parsedResponse;
    }

    async searchOther(select, thing) {
        const rawResponse = await fetch(this.host + '/songs/by/?' + select + '=' + thing);
        const parsedResponse = await rawResponse.json();
        //console.log(parsedResponse)
        return parsedResponse;
    }

    async newSong(file,name,artist,album,lyrics) {
        var data = new FormData()
        data.append('audio', file)

        const rawResponse = await fetch(this.host +'/songs/?name='+name+'&artist='+artist+'&album='+album+'&lyrics='+lyrics, {
            method: 'POST',
            body: data
        })
        const parsedResponse = await rawResponse.json();
        console.log(parsedResponse)
        return parsedResponse;
    }
}

