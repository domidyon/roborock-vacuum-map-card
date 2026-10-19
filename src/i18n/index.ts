import type { Language } from '../types';

const en = {
  status: 'Status',
  battery: 'Battery',
  room: 'Room',
  area: 'Area',
  duration: 'Duration',
  progress: 'Progress',
  entireFloor: 'Entire floor',
  configureJob: 'Configure job',
  selectionMode: 'Map selection mode',
  rooms: 'Rooms',
  zone: 'Zone',
  selectedRooms: 'Selected rooms',
  noRoomsSelected: 'Tap one or more rooms on the map',
  selectedZone: 'Selected zone',
  noZoneSelected: 'Drag on the map to draw a cleaning zone',
  zoneReady: 'Drag to move or use the corners to resize',
  customZone: 'Custom zone',
  clearZone: 'Clear zone',
  resizeZone: 'Resize zone',
  pause: 'Pause',
  resume: 'Resume',
  stop: 'Stop',
  dock: 'Dock',
  dryingMop: 'Drying mop',
  washingMop: 'Washing mop',
  remaining: 'remaining',
  configureTitle: 'Configure cleaning job',
  presets: 'Presets',
  cleaningType: 'Cleaning type',
  smartPlan: 'AI SmartPlan',
  vacuumOnly: 'Vacuum only',
  vacuumAndMop: 'Vac & Mop',
  vacuumThenMop: 'Vac followed by Mop',
  smartPlanDescription:
    'Roborock AI chooses suction, water flow, and route for every selected room.',
  vacuumDescription: 'Vacuum only. The mop stays raised.',
  mopOnly: 'Mop only',
  mopOnlyDescription: 'Mop only. Suction stays off.',
  vacuumAndMopDescription:
    'Vacuum and mop together for a daily clean.',
  vacuumThenMopDescription:
    'Runs the saved Roborock routine for this floor. Rooms, suction, water flow, passes, and route are defined in the Roborock app.',
  suction: 'Suction',
  waterFlow: 'Water flow',
  cleaningCount: 'Cleaning count',
  savedProfiles: 'Saved profiles',
  mopRoute: 'Mop route',
  mopIntensity: 'Mop intensity',
  cancel: 'Cancel',
  start: 'Start',
  starting: 'Starting…',
  unsupported: 'Unavailable',
  mapMissing: 'The configured map entity is unavailable.',
  imageMissing: 'The map entity does not expose an image.',
  calibrationMissing:
    'Roborock Custom Map calibration is missing. Install and configure Roborock Custom Map.',
  roomsMissing:
    'Roborock Custom Map room metadata is missing. No hitboxes were guessed.',
  roomUnmapped:
    'This segment is not mapped to a Home Assistant area.',
  launched: 'Cleaning job sent',
  floor: 'Floor',
  close: 'Close',
  dockStation: 'Dock station',
  dockOverview: 'Wash, empty, dry, and dock settings',
  empty: 'Empty',
  wash: 'Wash',
  dry: 'Dry',
  dockSettings: 'Dock settings',
  mopWashFrequency: 'Mop wash frequency',
  washingMode: 'Washing mode',
  washTemperature: 'Water temperature',
  dustbin: 'Dustbin',
  autoEmpty: 'Auto-empty',
  emptyMode: 'Empty mode',
  drying: 'Drying',
  autoDry: 'Auto-drying',
  dryDuration: 'Duration',
  safetyMaintenance: 'Safety & maintenance',
  childLock: 'Dock child lock',
  drainWaterTank: 'Drain onboard dirty-water tank',
  drainWarning:
    'Unavailable through the current Home Assistant Roborock integration. Use the Roborock app.',
  confirmEmpty: 'Start dock emptying? This will make noise.',
  confirmWash:
    'Start washing the mop? This will run the dock pump.',
  confirmDry:
    'Start drying the mop? This will run the dock fan.',
  confirmDrain: 'Drain the onboard dirty-water tank now?',
  drainRejected:
    'Home Assistant cannot currently encode this Roborock command correctly. Use the Roborock app.',
  settingSaved: 'Dock setting saved',
  dockActionSent: 'Dock command sent',
  active: 'Active',
  inactive: 'Off',
  prepareUpstairs: 'Prepare upstairs',
  preparingUpstairs: 'Preparing…',
  startUpstairs: 'Start upstairs',
  dockAndFinish: 'Dock & finish',
  newUpstairsJob: 'New upstairs job',
  assistedCarryTitle: 'Upstairs assisted clean',
  assistedCarryDescription:
    'The dock prepares the mop, then the card guides both carries and finishes dock maintenance.',
  assisted_preparing_title: 'Preparing at the dock',
  assisted_preparing_description:
    'Stopping drying, washing the mop, and moving the robot to its pickup point.',
  assisted_carry_upstairs_title: 'Carry the robot upstairs',
  assisted_carry_upstairs_description:
    'Place it at a clear starting point, then start the saved Vac & Mop job.',
  assisted_cleaning_upstairs_title: 'Cleaning upstairs',
  assisted_cleaning_upstairs_description:
    'The robot will return to this upstairs starting point when it is finished.',
  assisted_carry_downstairs_title: 'Carry the robot downstairs',
  assisted_carry_downstairs_description:
    'Place it on the downstairs floor near the dock, or directly onto the dock.',
  assisted_finishing_title: 'Finishing at the dock',
  assisted_finishing_description:
    'Docking, emptying, washing the mop, and verifying automatic drying.',
  assisted_complete_title: 'Upstairs cleaning complete',
  assisted_complete_description:
    'The robot is docked, the mop is washed, and drying has started when configured.',
  assisted_error_title: 'Assistant needs attention',
  assisted_error_description:
    'Check the robot and dock, then reset the workflow to try again.',
  lastClean: 'Last clean',
  justNow: 'just now',
  yesterday: 'yesterday',
  ago: 'ago',
  daysAgo: 'days ago',
  hourShort: 'h',
  minuteShort: 'min',
};

const nl: typeof en = {
  status: 'Status',
  battery: 'Batterij',
  room: 'Ruimte',
  area: 'Oppervlak',
  duration: 'Duur',
  progress: 'Voortgang',
  entireFloor: 'Hele verdieping',
  configureJob: 'Taak instellen',
  selectionMode: 'Kaartselectiemodus',
  rooms: 'Kamers',
  zone: 'Zone',
  selectedRooms: 'Geselecteerde kamers',
  noRoomsSelected: 'Tik één of meer kamers op de kaart aan',
  selectedZone: 'Geselecteerde zone',
  noZoneSelected:
    'Sleep op de kaart om een schoonmaakzone te tekenen',
  zoneReady:
    'Sleep om te verplaatsen of gebruik de hoeken om het formaat aan te passen',
  customZone: 'Aangepaste zone',
  clearZone: 'Zone wissen',
  resizeZone: 'Zone aanpassen',
  pause: 'Pauze',
  resume: 'Hervatten',
  stop: 'Stop',
  dock: 'Naar dock',
  dryingMop: 'Dweil drogen',
  washingMop: 'Dweil wassen',
  remaining: 'resterend',
  configureTitle: 'Schoonmaaktaak instellen',
  presets: 'Presets',
  cleaningType: 'Schoonmaaktype',
  smartPlan: 'AI SmartPlan',
  vacuumOnly: 'Alleen stofzuigen',
  vacuumAndMop: 'Stofzuigen en dweilen',
  vacuumThenMop: 'Stofzuigen, daarna dweilen',
  smartPlanDescription:
    'Roborock AI kiest per geselecteerde kamer de zuigkracht, waterhoeveelheid en route.',
  vacuumDescription:
    'Alleen stofzuigen. De dweil blijft opgetild.',
  mopOnly: 'Alleen dweilen',
  mopOnlyDescription:
    'Alleen dweilen. De zuigkracht blijft uit.',
  vacuumAndMopDescription:
    'Tegelijk stofzuigen en dweilen voor de dagelijkse schoonmaak.',
  vacuumThenMopDescription:
    'Start de opgeslagen Roborock-routine voor deze verdieping. Kamers, zuigkracht, waterhoeveelheid, rondes en route zijn ingesteld in de Roborock-app.',
  suction: 'Zuigkracht',
  waterFlow: 'Waterhoeveelheid',
  cleaningCount: 'Aantal keer',
  savedProfiles: 'Opgeslagen profielen',
  mopRoute: 'Dweilroute',
  mopIntensity: 'Dweilintensiteit',
  cancel: 'Annuleren',
  start: 'Start',
  starting: 'Starten…',
  unsupported: 'Niet beschikbaar',
  mapMissing: 'De ingestelde kaartentiteit is niet beschikbaar.',
  imageMissing: 'De kaartentiteit bevat geen afbeelding.',
  calibrationMissing:
    'Roborock Custom Map-kalibratie ontbreekt. Installeer en configureer Roborock Custom Map.',
  roomsMissing:
    'Kamergegevens van Roborock Custom Map ontbreken. Er worden geen hitboxes gegokt.',
  roomUnmapped:
    'Dit segment is niet gekoppeld aan een Home Assistant-ruimte.',
  launched: 'Schoonmaaktaak verzonden',
  floor: 'Verdieping',
  close: 'Sluiten',
  dockStation: 'Dockstation',
  dockOverview: 'Wassen, legen, drogen en dockinstellingen',
  empty: 'Legen',
  wash: 'Wassen',
  dry: 'Drogen',
  dockSettings: 'Dockinstellingen',
  mopWashFrequency: 'Dweilwasfrequentie',
  washingMode: 'Wasstand',
  washTemperature: 'Watertemperatuur',
  dustbin: 'Stofbak',
  autoEmpty: 'Automatisch legen',
  emptyMode: 'Leegstand',
  drying: 'Drogen',
  autoDry: 'Automatisch drogen',
  dryDuration: 'Duur',
  safetyMaintenance: 'Veiligheid en onderhoud',
  childLock: 'Dock kinderslot',
  drainWaterTank: 'Vuilwatertank in robot legen',
  drainWarning:
    'Niet beschikbaar via de huidige Roborock-integratie van Home Assistant. Gebruik de Roborock-app.',
  confirmEmpty: 'Dock legen starten? Dit maakt geluid.',
  confirmWash:
    'Dweil wassen starten? Dit activeert de dockpomp.',
  confirmDry:
    'Dweil drogen starten? Dit activeert de dockventilator.',
  confirmDrain: 'Vuilwatertank in de robot nu legen?',
  drainRejected:
    'Home Assistant kan deze Roborock-opdracht momenteel niet correct coderen. Gebruik de Roborock-app.',
  settingSaved: 'Dockinstelling opgeslagen',
  dockActionSent: 'Dockopdracht verzonden',
  active: 'Actief',
  inactive: 'Uit',
  prepareUpstairs: 'Boven voorbereiden',
  preparingUpstairs: 'Voorbereiden…',
  startUpstairs: 'Start boven',
  dockAndFinish: 'Docken en afronden',
  newUpstairsJob: 'Nieuwe boventaak',
  assistedCarryTitle: 'Begeleid boven schoonmaken',
  assistedCarryDescription:
    'Het dock bereidt de dweil voor; daarna begeleidt de kaart beide draagmomenten en de dockreiniging.',
  assisted_preparing_title: 'Voorbereiden bij het dock',
  assisted_preparing_description:
    'Drogen stoppen, de dweil wassen en de robot naar het ophaalpunt rijden.',
  assisted_carry_upstairs_title: 'Draag de robot naar boven',
  assisted_carry_upstairs_description:
    'Zet hem op een vrije startplek en start daarna de opgeslagen stofzuig- en dweiltaak.',
  assisted_cleaning_upstairs_title: 'Boven wordt schoongemaakt',
  assisted_cleaning_upstairs_description:
    'Na afloop keert de robot terug naar deze startplek boven.',
  assisted_carry_downstairs_title: 'Draag de robot naar beneden',
  assisted_carry_downstairs_description:
    'Zet hem beneden in de buurt van het dock, of plaats hem rechtstreeks op het dock.',
  assisted_finishing_title: 'Afronden bij het dock',
  assisted_finishing_description:
    'Docken, stofbak legen, dweil wassen en automatisch drogen controleren.',
  assisted_complete_title: 'Boven is klaar',
  assisted_complete_description:
    'De robot staat in het dock, de dweil is gewassen en drogen is gestart wanneer ingesteld.',
  assisted_error_title: 'Assistent heeft aandacht nodig',
  assisted_error_description:
    'Controleer de robot en het dock en reset daarna de workflow.',
  lastClean: 'Laatste schoonmaak',
  justNow: 'zojuist',
  yesterday: 'gisteren',
  ago: 'geleden',
  daysAgo: 'dagen geleden',
  hourShort: 'u',
  minuteShort: 'min',
};

const tr: typeof en = {
  status: 'Durum',
  battery: 'Pil',
  room: 'Oda',
  area: 'Alan',
  duration: 'Süre',
  progress: 'İlerleme',

  entireFloor: 'Tam Temizlik',
  configureJob: 'Temizliği Ayarla',
  selectionMode: 'Harita seçim modu',

  rooms: 'Oda',
  zone: 'Bölge',

  selectedRooms: 'Seçilen odalar',
  noRoomsSelected: 'Temizlenecek odaları seçin',

  selectedZone: 'Seçilen bölge',
  noZoneSelected:
    'Temizlenecek bölgeyi çizmek için harita üzerinde sürükleyin',
  zoneReady:
    'Taşımak için sürükleyin veya boyutlandırmak için köşeleri kullanın',
  customZone: 'Özel bölge',
  clearZone: 'Bölgeyi temizle',
  resizeZone: 'Bölgeyi yeniden boyutlandır',

  pause: 'Duraklat',
  resume: 'Devam Et',
  stop: 'Durdur',
  dock: 'İstasyon',

  dryingMop: 'Paspas kurutuluyor',
  washingMop: 'Paspas yıkanıyor',
  remaining: 'kaldı',

  configureTitle: 'Temizlik Ayarları',
  presets: 'Ön Ayarlar',
  cleaningType: 'Temizlik türü',

  smartPlan: 'AI SmartPlan',
  vacuumOnly: 'Sadece Süpürme',
  vacuumAndMop: 'Süpürme ve Paspas',
  vacuumThenMop: 'Vakum, sonra Paspas',

  smartPlanDescription:
    'Roborock AI, seçilen her oda için vakum gücünü, su akışını ve rotayı otomatik olarak belirler.',

  vacuumDescription:
    'Sadece süpürme yapar. Paspas bezi kaldırılmış durumda kalır.',

  mopOnly: 'Sadece Paspas',
  mopOnlyDescription:
    'Sadece paspaslama yapar. Vakum kapalı kalır.',

  vacuumAndMopDescription:
    'Günlük temizlik için aynı anda süpürür ve paspaslar.',

  vacuumThenMopDescription:
    'Önce süpürme, sonra paspaslama yapar. Ayarlar Roborock uygulamasındaki kayıtlı iş akışından alınır.',

  suction: 'Vakum Gücü',
  waterFlow: 'Su Akışı',
  cleaningCount: 'Temizlik sayısı',
  savedProfiles: 'Kayıtlı profiller',
  mopRoute: 'Rota',
  mopIntensity: 'Silme Yoğunluğu',

  cancel: 'İptal',
  start: 'Başlat',
  starting: 'Başlatılıyor…',

  unsupported: 'Kullanılamıyor',

  mapMissing:
    'Ayarlanan harita kullanılamıyor.',

  imageMissing:
    'Harita görüntüsü kullanılamıyor.',

  calibrationMissing:
    'Roborock Custom Map kalibrasyonu bulunamadı. Roborock Custom Map entegrasyonunu kurup yapılandırın.',

  roomsMissing:
    'Roborock Custom Map oda bilgileri bulunamadı.',

  roomUnmapped:
    'Bu oda Home Assistant alanlarından biriyle eşleştirilmemiş.',

  launched: 'Temizlik görevi gönderildi',

  floor: 'Kat',
  close: 'Kapat',

  dockStation: 'Bağlantı İstasyonu',

  dockOverview:
    'Yıkama, boşaltma, kurutma ve istasyon ayarları',

  empty: 'Boşalt',
  wash: 'Yıka',
  dry: 'Kurut',

  dockSettings: 'Bağlantı İstasyonu Ayarları',

  mopWashFrequency: 'Paspas yıkama sıklığı',
  washingMode: 'Yıkama modu',
  washTemperature: 'Su sıcaklığı',

  dustbin: 'Toz Haznesi',
  autoEmpty: 'Otomatik Boşaltma',
  emptyMode: 'Boşaltma modu',

  drying: 'Kurutma',
  autoDry: 'Otomatik Kurutma',
  dryDuration: 'Süre',

  safetyMaintenance: 'Güvenlik ve Bakım',
  childLock: 'İstasyon çocuk kilidi',

  drainWaterTank:
    'Robotun kirli su tankını boşalt',

  drainWarning:
    'Bu özellik mevcut Home Assistant Roborock entegrasyonu üzerinden kullanılamıyor. Roborock uygulamasını kullanın.',

  confirmEmpty:
    'Toz haznesi boşaltılsın mı? Bu işlem ses çıkaracaktır.',

  confirmWash:
    'Paspas yıkama başlatılsın mı?',

  confirmDry:
    'Paspas kurutma başlatılsın mı?',

  confirmDrain:
    'Robotun kirli su tankı şimdi boşaltılsın mı?',

  drainRejected:
    'Home Assistant şu anda bu Roborock komutunu doğru şekilde gönderemiyor. Roborock uygulamasını kullanın.',

  settingSaved: 'İstasyon ayarı kaydedildi',
  dockActionSent: 'İstasyon komutu gönderildi',

  active: 'Aktif',
  inactive: 'Kapalı',

  prepareUpstairs: 'Üst katı hazırla',
  preparingUpstairs: 'Hazırlanıyor…',
  startUpstairs: 'Üst katta başlat',
  dockAndFinish: 'İstasyona dön ve bitir',
  newUpstairsJob: 'Yeni üst kat temizliği',

  assistedCarryTitle:
    'Üst Kat Destekli Temizlik',

  assistedCarryDescription:
    'İstasyon paspası hazırlar. Ardından robotu üst kata taşımanız ve temizlik tamamlandığında tekrar istasyona getirmeniz için yönlendirilirsiniz.',

  assisted_preparing_title:
    'İstasyonda hazırlanıyor',

  assisted_preparing_description:
    'Kurutma durduruluyor, paspas yıkanıyor ve robot taşınmaya hazırlanıyor.',

  assisted_carry_upstairs_title:
    'Robotu üst kata taşıyın',

  assisted_carry_upstairs_description:
    'Robotu üst katta uygun bir başlangıç noktasına yerleştirin ve ardından temizliği başlatın.',

  assisted_cleaning_upstairs_title:
    'Üst kat temizleniyor',

  assisted_cleaning_upstairs_description:
    'Temizlik tamamlandığında robot üst kattaki başlangıç noktasına geri dönecektir.',

  assisted_carry_downstairs_title:
    'Robotu alt kata taşıyın',

  assisted_carry_downstairs_description:
    'Robotu istasyonun yakınına veya doğrudan istasyona yerleştirin.',

  assisted_finishing_title:
    'İstasyonda tamamlanıyor',

  assisted_finishing_description:
    'Robot istasyona dönüyor, toz haznesi boşaltılıyor, paspas yıkanıyor ve otomatik kurutma kontrol ediliyor.',

  assisted_complete_title:
    'Üst kat temizliği tamamlandı',

  assisted_complete_description:
    'Robot istasyonda. Paspas yıkandı ve ayarlanmışsa kurutma başlatıldı.',

  assisted_error_title:
    'İşlem kontrol edilmeli',

  assisted_error_description:
    'Robotu ve istasyonu kontrol edin, ardından işlemi yeniden başlatın.',

  lastClean: 'Son temizlik',
  justNow: 'az önce',
  yesterday: 'dün',
  ago: 'önce',
  daysAgo: 'gün önce',
  hourShort: 'sa',
  minuteShort: 'dk',
};

const pl: typeof en = {
  status: 'Status',
  battery: 'Bateria',
  room: 'Pomieszczenie',
  area: 'Powierzchnia',
  duration: 'Czas',
  progress: 'Postęp',
  entireFloor: 'Całe piętro',
  configureJob: 'Ustaw sprzątanie',
  selectionMode: 'Tryb wyboru na mapie',
  rooms: 'Pomieszczenia',
  zone: 'Strefa',
  selectedRooms: 'Wybrane pomieszczenia',
  noRoomsSelected: 'Dotknij jednego lub kilku pomieszczeń na mapie',
  selectedZone: 'Wybrana strefa',
  noZoneSelected: 'Przeciągnij po mapie, aby narysować strefę sprzątania',
  zoneReady: 'Przeciągnij, aby przesunąć, lub użyj narożników, aby zmienić rozmiar',
  customZone: 'Własna strefa',
  clearZone: 'Usuń strefę',
  resizeZone: 'Zmień rozmiar strefy',
  pause: 'Pauza',
  resume: 'Wznów',
  stop: 'Zatrzymaj',
  dock: 'Do stacji',
  dryingMop: 'Suszenie mopa',
  washingMop: 'Mycie mopa',
  remaining: 'pozostało',
  configureTitle: 'Ustawienia sprzątania',
  presets: 'Profile',
  cleaningType: 'Rodzaj sprzątania',
  smartPlan: 'AI SmartPlan',
  vacuumOnly: 'Odkurz',
  vacuumAndMop: 'Odkurz i mop',
  vacuumThenMop: 'Odkurz, potem mopuj',
  smartPlanDescription:
    'Uczy się i dostosowuje do Twojej przestrzeni, zwyczajów oraz preferencji, aby dobierać optymalną ścieżkę sprzątania.',
  vacuumDescription: 'Tylko odkurzanie, jeden raz.',
  mopOnly: 'Mopuj',
  mopOnlyDescription: 'Tylko mopowanie, jeden raz.',
  vacuumAndMopDescription:
    'Dzienne odkurzanie i mopowanie.',
  vacuumThenMopDescription:
    'Uruchamia zapisaną procedurę Roborock dla tego piętra. Pomieszczenia, siłę ssania, przepływ wody, liczbę przejść i trasę ustawia się w aplikacji Roborock.',
  suction: 'Siła ssania',
  waterFlow: 'Przepływ wody',
  cleaningCount: 'Liczba przejść',
  savedProfiles: 'Zapisane profile',
  mopRoute: 'Trasa mopowania',
  mopIntensity: 'Intensywność mopowania',
  cancel: 'Anuluj',
  start: 'Start',
  starting: 'Uruchamianie…',
  unsupported: 'Niedostępne',
  mapMissing: 'Skonfigurowana encja mapy jest niedostępna.',
  imageMissing: 'Encja mapy nie udostępnia obrazu.',
  calibrationMissing:
    'Brak kalibracji Roborock Custom Map. Zainstaluj i skonfiguruj Roborock Custom Map.',
  roomsMissing:
    'Brak danych o pomieszczeniach z Roborock Custom Map. Obszary nie zostały zgadnięte.',
  roomUnmapped:
    'Ten segment nie jest przypisany do obszaru Home Assistant.',
  launched: 'Wysłano zadanie sprzątania',
  floor: 'Piętro',
  close: 'Zamknij',
  dockStation: 'Stacja',
  dockOverview: 'Mycie, opróżnianie, suszenie i ustawienia stacji',
  empty: 'Opróżnij',
  wash: 'Umyj',
  dry: 'Susz',
  dockSettings: 'Ustawienia stacji',
  mopWashFrequency: 'Częstotliwość mycia mopa',
  washingMode: 'Tryb mycia',
  washTemperature: 'Temperatura wody',
  dustbin: 'Pojemnik na kurz',
  autoEmpty: 'Automatyczne opróżnianie',
  emptyMode: 'Tryb opróżniania',
  drying: 'Suszenie',
  autoDry: 'Automatyczne suszenie',
  dryDuration: 'Czas suszenia',
  safetyMaintenance: 'Bezpieczeństwo i konserwacja',
  childLock: 'Blokada rodzicielska stacji',
  drainWaterTank: 'Opróżnij zbiornik brudnej wody w robocie',
  drainWarning:
    'Niedostępne w obecnej integracji Roborock dla Home Assistant. Użyj aplikacji Roborock.',
  confirmEmpty: 'Rozpocząć opróżnianie w stacji? Będzie głośno.',
  confirmWash:
    'Rozpocząć mycie mopa? Uruchomi to pompę stacji.',
  confirmDry:
    'Rozpocząć suszenie mopa? Uruchomi to wentylator stacji.',
  confirmDrain: 'Opróżnić teraz zbiornik brudnej wody w robocie?',
  drainRejected:
    'Home Assistant nie potrafi obecnie poprawnie wysłać tej komendy Roborock. Użyj aplikacji Roborock.',
  settingSaved: 'Zapisano ustawienie stacji',
  dockActionSent: 'Wysłano komendę do stacji',
  active: 'Aktywne',
  inactive: 'Wyłączone',
  prepareUpstairs: 'Przygotuj piętro',
  preparingUpstairs: 'Przygotowywanie…',
  startUpstairs: 'Start na piętrze',
  dockAndFinish: 'Do stacji i zakończ',
  newUpstairsJob: 'Nowe sprzątanie piętra',
  assistedCarryTitle: 'Sprzątanie piętra z przenoszeniem',
  assistedCarryDescription:
    'Stacja przygotowuje mopa, a karta prowadzi przez oba przeniesienia robota i kończy obsługę w stacji.',
  assisted_preparing_title: 'Przygotowanie w stacji',
  assisted_preparing_description:
    'Zatrzymywanie suszenia, mycie mopa i przejazd robota do punktu odbioru.',
  assisted_carry_upstairs_title: 'Zanieś robota na piętro',
  assisted_carry_upstairs_description:
    'Postaw go w wolnym miejscu startowym, a potem uruchom zapisane sprzątanie.',
  assisted_cleaning_upstairs_title: 'Sprzątanie piętra',
  assisted_cleaning_upstairs_description:
    'Po zakończeniu robot wróci do tego miejsca startowego na piętrze.',
  assisted_carry_downstairs_title: 'Znieś robota na dół',
  assisted_carry_downstairs_description:
    'Postaw go na dolnym piętrze blisko stacji albo bezpośrednio na stacji.',
  assisted_finishing_title: 'Kończenie w stacji',
  assisted_finishing_description:
    'Dokowanie, opróżnianie, mycie mopa i sprawdzenie automatycznego suszenia.',
  assisted_complete_title: 'Sprzątanie piętra zakończone',
  assisted_complete_description:
    'Robot jest w stacji, mop umyty, a suszenie uruchomione, jeśli jest skonfigurowane.',
  assisted_error_title: 'Wymagana uwaga',
  assisted_error_description:
    'Sprawdź robota i stację, a potem zresetuj procedurę, aby spróbować ponownie.',
  lastClean: 'Ostatnie sprzątanie',
  justNow: 'przed chwilą',
  yesterday: 'wczoraj',
  ago: 'temu',
  daysAgo: 'dni temu',
  hourShort: 'godz.',
  minuteShort: 'min',
};

export type TranslationKey = keyof typeof en;

export function t(
  language: Language | undefined,
  key: TranslationKey,
): string {
  if (language === 'nl') {
    return nl[key];
  }

  if (language === 'pl') {
    return pl[key];
  }

  if (language === 'tr') {
    return tr[key];
  }

  return en[key];
}

// Labels for live Roborock option values (suction, water flow, mop route).
// Values without a translation fall back to English, then to a title-cased ID.
const optionLabels: Partial<Record<Language, Record<string, string>>> = {
  en: { deep_plus: 'Deep+' },
  pl: {
    quiet: 'Cichy',
    balanced: 'Zrównoważony',
    turbo: 'Turbo',
    max: 'Max',
    max_plus: 'Max+',
    slight: 'Minimalny',
    low: 'Niski',
    medium: 'Średni',
    moderate: 'Umiarkowany',
    high: 'Wysoki',
    extreme: 'Ekstremalny',
    fast: 'Szybko',
    standard: 'Ogólne',
    deep: 'Intensywny',
    deep_plus: 'Intensywny+',
  },
};

export function optionText(language: Language | undefined, value: string): string {
  return optionLabels[language ?? 'en']?.[value]
    ?? optionLabels.en?.[value]
    ?? value.replaceAll('_', ' ').replace(/\b\w/g, (character) => character.toUpperCase());
}
