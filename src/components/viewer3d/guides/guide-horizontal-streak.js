import * as Three from 'three';
import { List } from 'immutable';
import { COLORS } from '../../../shared-style';

export default function (width, height, guide, font) {
  let step = guide.properties.get('step');
  let colors = guide.properties.has('color') ? new List([guide.properties.get('color')]) : guide.properties.get('colors');

  let streak = new Three.Object3D();
  streak.name = 'streak';
  let counter = 0;

  for (let i = 0; i <= height; i += step) {

    let geometry = new Three.Geometry();
    geometry.vertices.push(new Three.Vector3(0, 0, -i));
    geometry.vertices.push(new Three.Vector3(width, 0, -i));
    let color = colors.get(counter % colors.size);
    let material = new Three.LineBasicMaterial({ color });

    if (counter % 5 == 0) {
      let shape = new Three.TextGeometry(counter * step, {
        size: 16,
        height: 1,
        font
      });

      let wrapper = new Three.MeshBasicMaterial({ color: COLORS.black });
      let words = new Three.Mesh(shape, wrapper);

      words.rotation.x -= Math.PI / 2;
      words.position.set(-90, 0, -i);
      streak.add(words);
    }

    streak.add(new Three.LineSegments(geometry, material));
    counter++;
  }
  return streak;
}
