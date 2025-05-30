export const MENU_BASIC_HTML_SNIPPET = `  <button mat-flat-button color="primary" class="m-t-8" [matMenuTriggerFor]="menu">
              Menu
            </button>
            <mat-menu #menu="matMenu" class="cardWithShadow">
              <button mat-menu-item>Item 1</button>
              <button mat-menu-item>Item 2</button>
            </mat-menu>
`;

export const MENU_ICONS_HTML_SNIPPET = `  <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
                <mat-icon>
                  <i-tabler name="dots" class="icon-20"></i-tabler>
                </mat-icon>
              </button>
              <mat-menu #menu="matMenu" class="cardWithShadow">
                <button mat-menu-item>
                  <mat-icon>dialpad</mat-icon>
                  <span>Redial</span>
                </button>
                <button mat-menu-item disabled>
                  <mat-icon>voicemail</mat-icon>
                  <span>Check voice mail</span>
                </button>
                <button mat-menu-item>
                  <mat-icon>notifications_off</mat-icon>
                  <span>Disable alerts</span>
                </button>
              </mat-menu>
`;

export const MENU_NESTED_HTML_SNIPPET = `  <button mat-flat-button color="primary" [matMenuTriggerFor]="animals" class="m-t-8">
                Animal index
              </button>
              <mat-menu class="cardWithShadow" #animals="matMenu">
                <button mat-menu-item [matMenuTriggerFor]="vertebrates">
                  Vertebrates
                </button>
                <button mat-menu-item [matMenuTriggerFor]="invertebrates">
                  Invertebrates
                </button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #vertebrates="matMenu">
                <button mat-menu-item [matMenuTriggerFor]="fish">Fishes</button>
                <button mat-menu-item [matMenuTriggerFor]="amphibians">
                  Amphibians
                </button>
                <button mat-menu-item [matMenuTriggerFor]="reptiles">
                  Reptiles
                </button>
                <button mat-menu-item>Birds</button>
                <button mat-menu-item>Mammals</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #invertebrates="matMenu">
                <button mat-menu-item>Insects</button>
                <button mat-menu-item>Molluscs</button>
                <button mat-menu-item>Crustaceans</button>
                <button mat-menu-item>Corals</button>
                <button mat-menu-item>Arachnids</button>
                <button mat-menu-item>Velvet worms</button>
                <button mat-menu-item>Horseshoe crabs</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #fish="matMenu">
                <button mat-menu-item>Baikal oilfish</button>
                <button mat-menu-item>Bala shark</button>
                <button mat-menu-item>Ballan wrasse</button>
                <button mat-menu-item>Bamboo shark</button>
                <button mat-menu-item>Banded killifish</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #amphibians="matMenu">
                <button mat-menu-item>Sonoran desert toad</button>
                <button mat-menu-item>Western toad</button>
                <button mat-menu-item>Arroyo toad</button>
                <button mat-menu-item>Yosemite toad</button>
              </mat-menu>
  
              <mat-menu class="cardWithShadow" #reptiles="matMenu">
                <button mat-menu-item>Banded Day Gecko</button>
                <button mat-menu-item>Banded Gila Monster</button>
                <button mat-menu-item>Black Tree Monitor</button>
                <button mat-menu-item>Blue Spiny Lizard</button>
                <button mat-menu-item disabled>Velociraptor</button>
              </mat-menu>
`;


export const MENU_POSITIONS_HTML_SNIPPET = `  <div class="row">
                <div class="col-sm-3">
                  <button mat-flat-button color="primary" class="w-100" [matMenuTriggerFor]="aboveMenu">
                    Above
                  </button>
                  <mat-menu class="cardWithShadow" #aboveMenu="matMenu" yPosition="above">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
                <div class="col-sm-3">
                  <button mat-flat-button color="accent" class="w-100" [matMenuTriggerFor]="belowMenu">
                    Below
                  </button>
                  <mat-menu class="cardWithShadow" #belowMenu="matMenu" yPosition="below">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
                <div class="col-sm-3">
                  <button mat-flat-button color="warn" class="w-100" [matMenuTriggerFor]="beforeMenu">
                    Before
                  </button>
                  <mat-menu class="cardWithShadow" #beforeMenu="matMenu" xPosition="before">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
                <div class="col-sm-3">
                  <button mat-flat-button color="primary" class="w-100" [matMenuTriggerFor]="afterMenu">
                    After
                  </button>
                  <mat-menu class="cardWithShadow" #afterMenu="matMenu" xPosition="after">
                    <button mat-menu-item>Item 1</button>
                    <button mat-menu-item>Item 2</button>
                  </mat-menu>
                </div>
              </div>
`;