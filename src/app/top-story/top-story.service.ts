import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TopStoryService {

    private resourceUrl = 'api/topStory'

    constructor(public httpClient: HttpClient) {

    }

    public getTopStory(storyType: string) {
        return this.httpClient.get<any>(`${this.resourceUrl}/${}`)
    } 
}

type EntityResponse = HttpResponse<IEntity>;
type EntityArrayResponse = HttpResponse<IEntity[]>;
@Injectable({providedIn: 'root' })
export class EntityService {
resourceUrl = SERVER_API_URL +  'api/entityname';
constructor(private http: HttpClient) { }
create(label: IEntity): Observable<EntityResponse> {
return this.http.post<IEntity>(this.resourceUrl, label, { observe: 'response' });
}
update(label: IEntity): Observable<EntityResponse> {
return this.http.put<IEntity>(this.resourceUrl, label, { observe: 'response' });
}
find(id: number): Observable<EntityResponse> {
return this.http.get<IEntity>(`${this.resourceUrl}/id`, { observe: 'response' });
}
query(req?: any): Observable<EntityArrayResponse> {
const options = createRequestOption(req);
return this.http.get<IEntity[]>(this.resourceUrl, { params: options, observe: 'response' });
}
delete(id: number): Observable<EntityResponse> {
return this.http.delete<any>(`${this.resourceUrl}/id`, { observe: 'response' });
}
}