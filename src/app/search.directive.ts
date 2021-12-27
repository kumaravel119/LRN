import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SearchhighlightService } from './searchhighlight.service';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements OnInit{
  @Input() searchedWord:any;
  @Input() content:any;
  @Input() classToApply:any;
  @Input() setTitle:any;

  

  constructor( private el:ElementRef, 
    private render:Renderer2, 
    private searchHighlight:SearchhighlightService,
    private sanitizer: DomSanitizer
    ) {}

  ngOnInit(): void {
      this.searchHighlight.searchedWordObservable().subscribe((searchText:any) => {
        this.searchedWord = searchText
        this.highLightWord();
      } )
  }

  highLightWord(){
    if(this.el?.nativeElement){
      const text = (this.el.nativeElement as HTMLElement).textContent;
      if (this.searchedWord === '') {
        this.el.nativeElement.innerHTML = text;
      } else {
        const regex = new RegExp(
          this.searchedWord,
          "gi"
        );
        const newText: any = text?.replace(regex, (match: any) => {
          return `<mark class="highlight">${match}</mark>`;
        });
        const sanitzed = this.sanitizer.sanitize(
          SecurityContext.HTML,
          newText
        );
        this.el.nativeElement.innerHTML = sanitzed;
      }
    }
  }


  // ngOnChanges(changes: SimpleChanges) {
  //     if(!this.content){
  //       return;
  //     }

  //     if(!this.setTitle){
  //       this.render.setProperty(
  //         this.el.nativeElement,
  //         'title',
  //         this.content
  //       )
  //     }

  //     if(!this.searchedWord || !this.searchedWord.length || !this.classToApply){
  //       this.render.setProperty(this.el.nativeElement,'innerHTML',this.content);
  //       return;
  //     }

  //     this.render.setProperty(
  //       this.el.nativeElement,
  //       'innerHTML',
  //       this.getFormattedText()
  //     )
  // };

  // getFormattedText(){
  //   const res = new RegExp(`(${this.searchedWord})`,'gi');
  //   return this.content.toString().replace(res,`<span class="${this.classToApply}">$1</span>`);
  // }
}
