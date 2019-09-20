import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private resourceUrl = 'api/question';

  constructor(public httpClient: HttpClient) { }

  public getAnswers(questionId: number) {
    return this.httpClient.get<any[]>(`${this.resourceUrl}/${questionId}`, { observe: 'body' });
  }

}
