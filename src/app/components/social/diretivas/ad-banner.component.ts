import { Input, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FrameDirective } from "./frame.directive";

export class AdBannerComponent implements OnInit, OnDestroy {
    @Input() ads: AdItem[] = [];
  
    currentAdIndex = -1;
  
    @ViewChild(FrameDirective, {static: true}) adHost!: FrameDirective;
    interval: number|undefined;
  
    ngOnInit(): void {
      this.loadComponent();
      this.getAds();
    }
  
    ngOnDestroy() {
      clearInterval(this.interval);
    }
  
    loadComponent() {
      this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
      const adItem = this.ads[this.currentAdIndex];
  
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
  
      const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
      componentRef.instance.data = adItem.data;
    }
  
    getAds() {
      this.interval = setInterval(() => {
        this.loadComponent();
      }, 3000);
    }
  }