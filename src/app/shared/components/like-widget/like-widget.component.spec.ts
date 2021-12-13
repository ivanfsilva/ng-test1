import { LikeWidgetComponent } from './like-widget.component';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

describe( LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent = null;
  beforeEach( () => {
    component = new LikeWidgetComponent(new UniqueIdService());
  });

  it('should ', function() {

  });
});
