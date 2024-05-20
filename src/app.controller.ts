import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    const data ={ 
      title: 'brushh', 
      heading: 'brushh', 
      subheading: 'Craft your perfect coding environment',
      button_text: "Explore Themes",
      theme_heading: "Explore Themes"
    };

    return data;
  }
}
