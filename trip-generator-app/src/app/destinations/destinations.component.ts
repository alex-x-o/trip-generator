import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { QuestionsService } from 'src/services/questions.service';
import { DestinationsService } from 'src/services/destinations.service';
import { Destinations } from 'src/models/destinations.model';
import { FilterPipe } from 'src/pipes/filter.pipe';
import { DataService } from 'src/services/data.service';
import { Observable } from 'rxjs';
import { CdkDragEnd, CdkDrag, CdkDragPlaceholder } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
  providers: [ FilterPipe ]
})
export class DestinationsComponent implements OnInit {
  destinations: Destinations[] = [];
  public category: Observable<string>;
  filteredDestinations: any;
  destination: any;
  dest: Destinations[] = [];
  valueFromChild = '';

  constructor(private questionsService: QuestionsService,
              private destinationsService: DestinationsService,
              private filter: FilterPipe,
              private data: DataService) {
    this.category = this.data.shareAnswers$;
  }

  ngOnInit(): void {
    this.destinationsService.getDestinations().subscribe(
      destinations => this.destinations = destinations,
      error => console.error(error)
    );
  }

  saveChanges(valueEmitted) {
    this.valueFromChild = valueEmitted;
    document.getElementById('dis').hidden = true;
  }

}
