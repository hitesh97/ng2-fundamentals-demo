import { Component, Input, OnInit } from '@angular/core';
import { EventService, Event } from './event.service';
import { RouteParams } from '@angular/router-deprecated';


@Component({
  selector: 'event-details',
  template:`
  <div ng-controller="EventController" style="padding-left:20px; padding-right:20px">
    <img [src]="event.imageUrl" [alt]="event.name">

    <div class="row">
      <div class="span11">
        <h2>{{event.name | uppercase}} </h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div><strong>Date:</strong> {{event.date}}</div>
        <div><strong>Time:</strong> {{event.time}}</div>
        <div><strong>Price:</strong> {{499 | currency:"USD":true}}</div>
      </div>
      <div class="col-md-6">
        <address>
          <strong>Address:</strong><br />
          {{event.location.address}}<br />
          {{event.location.city}}, {{event.location.country}}
        </address>
      </div>
    </div>

    <hr>

    <h3>Sessions</h3>
    <!--Order By:
    <select name="" id="" ng-model="sortorder" class="input-small">
      <option value="name" selected>Name</option>
      <option value="-upVoteCount">Votes</option>
    </select>
    Show:
    <select name="" id="" ng-model="query.level" class="input-medium">
      <option value="" selected>All</option>
      <option value="introductory" >Introductory</option>
      <option value="intermediate" >Intermediate</option>
      <option value="advanced" >Advanced</option>
    </select>-->
    <div class="row" *ngFor="let session of event.sessions">
      <div class="col-md-1">
        <upvote upvote="upVoteSession(session)" downvote="downVoteSession(session)" count="session.upVoteCount"></upvote>
      </div>
      <div class="well col-md-11">
        A Session
        <collapsible title="{{session.name}}">
            <h6 style="margin-top:-10px">{{session.creatorName}}</h6>
            <span>Duration: {{session.duration}}</span><br />
            <span>Level: {{session.level}}</span>

            <p [textOverflow]="session.abstract" textLength="10">{{session.abstract}}</p>
        </collapsible>
      </div>
    </div>
  </div>

  `
})
export class EventDetailsComponent implements OnInit {
  // @Input() event: any;
  event: Event;
  
  constructor(private eventService: EventService,
    private routeParams: RouteParams) {}
  
  ngOnInit() {
    this.event = this.eventService.getEvent(+this.routeParams.get('id'))
  }
}