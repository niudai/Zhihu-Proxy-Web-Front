import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TopStoryService {

    private resourceUrl = 'api/topStory'

    constructor(public httpClient: HttpClient) {

    }

    public getTopStory(storyType: string) {
        return this.httpClient.get<any[]>(`${this.resourceUrl}/${storyType}`, { observe: 'body'});
    }

}

