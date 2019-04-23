```bash
npm i -D @angular/cli
ng new my-app
```

```bash
cd my-app
ng serve --open
# http://localhost:4200/
```

```bash
npx ng generate component heroes
```

```ts
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
```


1. selector— コンポーネントのCSS要素セレクター
1.templateUrl— コンポーネントのテンプレートファイルの場所
1.styleUrls— コンポーネントのプライベートCSSスタイルの場所
