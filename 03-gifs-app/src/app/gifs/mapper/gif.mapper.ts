import { Gift } from "../interfaces/gift.interface";
import { GiphyItem } from "../interfaces/Giphy.interface";

export class GifMapper {

    static mapGiphyItemToGift(giphyItem: GiphyItem): Gift {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        };
    }

    static mapGiphyItemToGiftArray(giphyItem: GiphyItem[]): Gift[] {
        return giphyItem.map(this.mapGiphyItemToGift);
    }
}
