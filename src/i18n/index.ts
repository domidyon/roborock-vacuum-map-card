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
  stateCleaning: 'Cleaning',
  stateDocked: 'Docked',
  statePaused: 'Paused',
  stateIdle: 'Idle',
  stateReturning: 'Returning',
  stateCharging: 'Charging',
  stateError: 'Error',
  stateUnavailable: 'Unavailable',
  stateUnknown: 'Unknown',
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
  minutesAgo: '{n} min ago',
  hoursAgo: '{n} h ago',
  daysAgo: '{n} days ago',
  hourShort: 'h',
  minuteShort: 'min',
  preflightBlocked: "Can't start yet",
  preflightWarnings: "Check before starting",
  startAnyway: "Start anyway",
  check_clean_water_empty: "The clean water tank is empty.",
  check_water_shortage: "The robot reports a water shortage.",
  check_mop_detached: "The mop is not attached.",
  check_water_box_detached: "The water tank is not attached.",
  check_dirty_water_full: "The dirty water tank is full.",
  check_dock_error: "The dock reports an error:",
  check_low_battery: "The battery is low:",
  check_maintenance_overdue: "Parts are due for maintenance:",
  maintenance: "Maintenance",
  maintenanceOk: "OK",
  maintenanceDue: "Due soon",
  maintenanceOverdue: "Due now",
  maintenanceUnknown: "Unknown",
  resetConsumable: "Reset",
  confirmResetConsumable: "Reset this counter? Only do this after replacing or cleaning the part.",
  enableResetHint: "To reset counters from here, enable the reset buttons of the Roborock device in Home Assistant.",
  consumable_main_brush: "Main brush",
  consumable_side_brush: "Side brush",
  consumable_filter: "Filter",
  consumable_sensors: "Sensors",
  consumable_strainer: "Dock strainer",
  consumable_mop: "Mop",
  consumable_roller: "Roller brush",
  consumable_cleaning_brush: "Dock cleaning brush",
  setupAttention: "Setup needs attention",
  upgradeHintTitle: "New sensors available",
  upgradeHint: "This card was set up before 0.9. Edit the card and press Re-detect to add pre-start checks, maintenance and the new dock sensors.",
  health_area_missing: "Room {room} uses area {area}, which no longer exists.",
  health_entity_missing: "{entity} no longer exists.",
  health_map_option_missing: "The map selector no longer offers {option}.",
  health_map_uncalibrated: "{entity} has no map calibration.",
  roomAreaMissing: "area no longer exists",
  dismiss: "Dismiss",
  maintenanceBadge: "Maintenance due",
  setupTitle: "Finish setting up the Roborock card",
  setupIntro: "A few things are needed before this card can control your vacuum.",
  prereq_home_assistant_version: "Home Assistant 2026.8 or newer",
  prereq_roborock_integration: "Roborock integration with a vacuum",
  prereq_custom_map: "Roborock Custom Map integration",
  prereq_administrator: "Administrator account (for room areas and helpers)",
  setupFix: "Fix",
  setupOpenEditor: "Then edit this card and choose Setup assistant.",
  setupConfigErrors: "The card configuration needs attention:",
  setupVacuumMissing: "The configured vacuum doesn't exist:",
  mapLoading: "Loading map…",
  mapLoadFailed: "The map image could not be loaded.",
  retry: "Retry",
  vacuumOffline: "The vacuum is offline. Home Assistant can't reach it right now.",
  vacuumErrorBanner: "The vacuum reports an error:",
  copyDiagnostics: "Copy diagnostics",
  diagnosticsCopied: "Diagnostics copied. Paste them into your GitHub issue.",
  diagnosticsManual: "Copy the text below into your GitHub issue.",
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
  stateCleaning: 'Reinigt',
  stateDocked: 'In het dock',
  statePaused: 'Gepauzeerd',
  stateIdle: 'Inactief',
  stateReturning: 'Keert terug',
  stateCharging: 'Opladen',
  stateError: 'Fout',
  stateUnavailable: 'Niet beschikbaar',
  stateUnknown: 'Onbekend',
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
  minutesAgo: '{n} min geleden',
  hoursAgo: '{n} u geleden',
  daysAgo: '{n} dagen geleden',
  hourShort: 'u',
  minuteShort: 'min',
  preflightBlocked: "Kan nog niet starten",
  preflightWarnings: "Controleer voor het starten",
  startAnyway: "Toch starten",
  check_clean_water_empty: "Het schoonwaterreservoir is leeg.",
  check_water_shortage: "De robot meldt een watertekort.",
  check_mop_detached: "De mop is niet bevestigd.",
  check_water_box_detached: "Het waterreservoir is niet geplaatst.",
  check_dirty_water_full: "Het vuilwaterreservoir is vol.",
  check_dock_error: "Het station meldt een fout:",
  check_low_battery: "De batterij is bijna leeg:",
  check_maintenance_overdue: "Onderdelen hebben onderhoud nodig:",
  maintenance: "Onderhoud",
  maintenanceOk: "OK",
  maintenanceDue: "Binnenkort",
  maintenanceOverdue: "Nu nodig",
  maintenanceUnknown: "Onbekend",
  resetConsumable: "Resetten",
  confirmResetConsumable: "Deze teller resetten? Doe dit alleen na het vervangen of schoonmaken van het onderdeel.",
  enableResetHint: "Schakel de resetknoppen van het Roborock-apparaat in Home Assistant in om tellers hier te resetten.",
  consumable_main_brush: "Hoofdborstel",
  consumable_side_brush: "Zijborstel",
  consumable_filter: "Filter",
  consumable_sensors: "Sensoren",
  consumable_strainer: "Stationfilter",
  consumable_mop: "Mop",
  consumable_roller: "Rolborstel",
  consumable_cleaning_brush: "Reinigingsborstel station",
  setupAttention: "Instellingen vragen aandacht",
  upgradeHintTitle: "Nieuwe sensoren beschikbaar",
  upgradeHint: "Deze kaart is ingesteld vóór 0.9. Bewerk de kaart en kies Opnieuw detecteren om startcontroles, onderhoud en de nieuwe dock-sensoren toe te voegen.",
  health_area_missing: "Ruimte {room} gebruikt gebied {area}, dat niet meer bestaat.",
  health_entity_missing: "{entity} bestaat niet meer.",
  health_map_option_missing: "De kaartkeuze biedt {option} niet meer aan.",
  health_map_uncalibrated: "{entity} heeft geen kaartkalibratie.",
  roomAreaMissing: "gebied bestaat niet meer",
  dismiss: "Sluiten",
  maintenanceBadge: "Onderhoud nodig",
  setupTitle: "Rond de installatie van de Roborock-kaart af",
  setupIntro: "Er is nog iets nodig voordat deze kaart je stofzuiger kan bedienen.",
  prereq_home_assistant_version: "Home Assistant 2026.8 of nieuwer",
  prereq_roborock_integration: "Roborock-integratie met een stofzuiger",
  prereq_custom_map: "Roborock Custom Map-integratie",
  prereq_administrator: "Beheerdersaccount (voor ruimtegebieden en helpers)",
  setupFix: "Oplossen",
  setupOpenEditor: "Bewerk daarna deze kaart en kies Installatie-assistent.",
  setupConfigErrors: "De kaartconfiguratie vraagt aandacht:",
  setupVacuumMissing: "De ingestelde stofzuiger bestaat niet:",
  mapLoading: "Kaart laden…",
  mapLoadFailed: "De kaartafbeelding kon niet worden geladen.",
  retry: "Opnieuw proberen",
  vacuumOffline: "De stofzuiger is offline. Home Assistant kan hem nu niet bereiken.",
  vacuumErrorBanner: "De stofzuiger meldt een fout:",
  copyDiagnostics: "Diagnose kopiëren",
  diagnosticsCopied: "Diagnose gekopieerd. Plak deze in je GitHub-issue.",
  diagnosticsManual: "Kopieer de tekst hieronder naar je GitHub-issue.",
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
  stateCleaning: 'Temizleniyor',
  stateDocked: 'İstasyonda',
  statePaused: 'Duraklatıldı',
  stateIdle: 'Boşta',
  stateReturning: 'İstasyona dönüyor',
  stateCharging: 'Şarj oluyor',
  stateError: 'Hata',
  stateUnavailable: 'Kullanılamıyor',
  stateUnknown: 'Bilinmiyor',

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
  minutesAgo: '{n} dk önce',
  hoursAgo: '{n} sa önce',
  daysAgo: '{n} gün önce',
  hourShort: 'sa',
  minuteShort: 'dk',
  preflightBlocked: "Henüz başlatılamıyor",
  preflightWarnings: "Başlatmadan önce kontrol edin",
  startAnyway: "Yine de başlat",
  check_clean_water_empty: "Temiz su tankı boş.",
  check_water_shortage: "Robot su eksikliği bildiriyor.",
  check_mop_detached: "Paspas takılı değil.",
  check_water_box_detached: "Su tankı takılı değil.",
  check_dirty_water_full: "Kirli su tankı dolu.",
  check_dock_error: "İstasyon bir hata bildiriyor:",
  check_low_battery: "Pil seviyesi düşük:",
  check_maintenance_overdue: "Parçaların bakımı gerekiyor:",
  maintenance: "Bakım",
  maintenanceOk: "Tamam",
  maintenanceDue: "Yakında",
  maintenanceOverdue: "Şimdi",
  maintenanceUnknown: "Bilinmiyor",
  resetConsumable: "Sıfırla",
  confirmResetConsumable: "Bu sayaç sıfırlansın mı? Bunu yalnızca parçayı değiştirdikten veya temizledikten sonra yapın.",
  enableResetHint: "Sayaçları buradan sıfırlamak için Home Assistant'ta Roborock cihazının sıfırlama düğmelerini etkinleştirin.",
  consumable_main_brush: "Ana fırça",
  consumable_side_brush: "Yan fırça",
  consumable_filter: "Filtre",
  consumable_sensors: "Sensörler",
  consumable_strainer: "İstasyon süzgeci",
  consumable_mop: "Paspas",
  consumable_roller: "Silindir fırça",
  consumable_cleaning_brush: "İstasyon temizleme fırçası",
  setupAttention: "Kurulum ilgi gerektiriyor",
  upgradeHintTitle: "Yeni sensörler mevcut",
  upgradeHint: "Bu kart 0.9 öncesinde kuruldu. Başlangıç kontrolleri, bakım ve yeni istasyon sensörlerini eklemek için kartı düzenleyin ve Yeniden algıla'ya basın.",
  health_area_missing: "{room} odası artık mevcut olmayan {area} alanını kullanıyor.",
  health_entity_missing: "{entity} artık mevcut değil.",
  health_map_option_missing: "Harita seçici artık {option} sunmuyor.",
  health_map_uncalibrated: "{entity} için harita kalibrasyonu yok.",
  roomAreaMissing: "alan artık mevcut değil",
  dismiss: "Kapat",
  maintenanceBadge: "Bakım gerekli",
  setupTitle: "Roborock kartının kurulumunu tamamlayın",
  setupIntro: "Bu kartın süpürgenizi kontrol edebilmesi için birkaç şey gerekiyor.",
  prereq_home_assistant_version: "Home Assistant 2026.8 veya daha yenisi",
  prereq_roborock_integration: "Süpürge içeren Roborock entegrasyonu",
  prereq_custom_map: "Roborock Custom Map entegrasyonu",
  prereq_administrator: "Yönetici hesabı (oda alanları ve yardımcılar için)",
  setupFix: "Düzelt",
  setupOpenEditor: "Ardından bu kartı düzenleyin ve Kurulum asistanını seçin.",
  setupConfigErrors: "Kart yapılandırması ilgi gerektiriyor:",
  setupVacuumMissing: "Yapılandırılan süpürge mevcut değil:",
  mapLoading: "Harita yükleniyor…",
  mapLoadFailed: "Harita görüntüsü yüklenemedi.",
  retry: "Tekrar dene",
  vacuumOffline: "Süpürge çevrimdışı. Home Assistant şu anda ona ulaşamıyor.",
  vacuumErrorBanner: "Süpürge bir hata bildiriyor:",
  copyDiagnostics: "Tanılamayı kopyala",
  diagnosticsCopied: "Tanılama kopyalandı. GitHub sorununuza yapıştırın.",
  diagnosticsManual: "Aşağıdaki metni GitHub sorununuza kopyalayın.",
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
  stateCleaning: 'Sprząta',
  stateDocked: 'W stacji',
  statePaused: 'Wstrzymano',
  stateIdle: 'Bezczynny',
  stateReturning: 'Wraca',
  stateCharging: 'Ładowanie',
  stateError: 'Błąd',
  stateUnavailable: 'Niedostępny',
  stateUnknown: 'Nieznany',
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
  minutesAgo: '{n} min temu',
  hoursAgo: '{n} godz. temu',
  daysAgo: '{n} dni temu',
  hourShort: 'godz.',
  minuteShort: 'min',
  preflightBlocked: "Nie można jeszcze rozpocząć",
  preflightWarnings: "Sprawdź przed startem",
  startAnyway: "Rozpocznij mimo to",
  check_clean_water_empty: "Zbiornik na czystą wodę jest pusty.",
  check_water_shortage: "Robot zgłasza brak wody.",
  check_mop_detached: "Mop nie jest zamontowany.",
  check_water_box_detached: "Zbiornik na wodę nie jest zamontowany.",
  check_dirty_water_full: "Zbiornik na brudną wodę jest pełny.",
  check_dock_error: "Stacja zgłasza błąd:",
  check_low_battery: "Niski poziom baterii:",
  check_maintenance_overdue: "Części wymagają konserwacji:",
  maintenance: "Konserwacja",
  maintenanceOk: "OK",
  maintenanceDue: "Wkrótce",
  maintenanceOverdue: "Teraz",
  maintenanceUnknown: "Nieznane",
  resetConsumable: "Resetuj",
  confirmResetConsumable: "Zresetować ten licznik? Zrób to tylko po wymianie lub wyczyszczeniu części.",
  enableResetHint: "Aby resetować liczniki tutaj, włącz przyciski resetu urządzenia Roborock w Home Assistant.",
  consumable_main_brush: "Szczotka główna",
  consumable_side_brush: "Szczotka boczna",
  consumable_filter: "Filtr",
  consumable_sensors: "Czujniki",
  consumable_strainer: "Sitko stacji",
  consumable_mop: "Mop",
  consumable_roller: "Szczotka wałkowa",
  consumable_cleaning_brush: "Szczotka czyszcząca stacji",
  setupAttention: "Konfiguracja wymaga uwagi",
  upgradeHintTitle: "Dostępne nowe czujniki",
  upgradeHint: "Ta karta została skonfigurowana przed wersją 0.9. Edytuj kartę i naciśnij Wykryj ponownie, aby dodać kontrole przed startem, konserwację i nowe czujniki stacji.",
  health_area_missing: "Pomieszczenie {room} używa obszaru {area}, który już nie istnieje.",
  health_entity_missing: "{entity} już nie istnieje.",
  health_map_option_missing: "Wybór mapy nie oferuje już {option}.",
  health_map_uncalibrated: "{entity} nie ma kalibracji mapy.",
  roomAreaMissing: "obszar już nie istnieje",
  dismiss: "Zamknij",
  maintenanceBadge: "Wymagana konserwacja",
  setupTitle: "Dokończ konfigurację karty Roborock",
  setupIntro: "Zanim ta karta będzie mogła sterować odkurzaczem, potrzeba jeszcze kilku rzeczy.",
  prereq_home_assistant_version: "Home Assistant 2026.8 lub nowszy",
  prereq_roborock_integration: "Integracja Roborock z odkurzaczem",
  prereq_custom_map: "Integracja Roborock Custom Map",
  prereq_administrator: "Konto administratora (dla obszarów pomieszczeń i pomocników)",
  setupFix: "Napraw",
  setupOpenEditor: "Następnie edytuj tę kartę i wybierz Asystenta konfiguracji.",
  setupConfigErrors: "Konfiguracja karty wymaga uwagi:",
  setupVacuumMissing: "Skonfigurowany odkurzacz nie istnieje:",
  mapLoading: "Ładowanie mapy…",
  mapLoadFailed: "Nie udało się załadować obrazu mapy.",
  retry: "Spróbuj ponownie",
  vacuumOffline: "Odkurzacz jest offline. Home Assistant nie może się z nim teraz połączyć.",
  vacuumErrorBanner: "Odkurzacz zgłasza błąd:",
  copyDiagnostics: "Kopiuj diagnostykę",
  diagnosticsCopied: "Skopiowano diagnostykę. Wklej ją do zgłoszenia na GitHubie.",
  diagnosticsManual: "Skopiuj poniższy tekst do zgłoszenia na GitHubie.",
};

const es: typeof en = {
  status: 'Estado',
  battery: 'Batería',
  room: 'Habitación',
  area: 'Superficie',
  duration: 'Duración',
  progress: 'Progreso',
  entireFloor: 'Planta completa',
  configureJob: 'Configurar limpieza',
  selectionMode: 'Modo de selección del mapa',
  rooms: 'Habitaciones',
  zone: 'Zona',
  selectedRooms: 'Habitaciones seleccionadas',
  noRoomsSelected: 'Toca una o varias habitaciones en el mapa',
  selectedZone: 'Zona seleccionada',
  noZoneSelected: 'Arrastra en el mapa para dibujar una zona de limpieza',
  zoneReady: 'Arrastra para mover o usa las esquinas para cambiar el tamaño',
  customZone: 'Zona personalizada',
  clearZone: 'Borrar zona',
  resizeZone: 'Cambiar tamaño de zona',
  pause: 'Pausar',
  resume: 'Reanudar',
  stop: 'Detener',
  dock: 'Base',
  dryingMop: 'Secando la mopa',
  washingMop: 'Lavando la mopa',
  remaining: 'restantes',
  configureTitle: 'Configurar limpieza',
  presets: 'Preajustes',
  cleaningType: 'Tipo de limpieza',
  smartPlan: 'AI SmartPlan',
  vacuumOnly: 'Solo aspirar',
  vacuumAndMop: 'Aspirar y fregar',
  vacuumThenMop: 'Aspirar y después fregar',
  smartPlanDescription:
    'Roborock AI elige la potencia de succión, el caudal de agua y la ruta para cada habitación seleccionada.',
  vacuumDescription: 'Solo aspira. La mopa permanece levantada.',
  mopOnly: 'Solo fregar',
  mopOnlyDescription: 'Solo friega. La succión permanece desactivada.',
  vacuumAndMopDescription:
    'Aspira y friega a la vez para la limpieza diaria.',
  vacuumThenMopDescription:
    'Ejecuta la rutina Roborock guardada para esta planta. Las habitaciones, la succión, el caudal de agua, las pasadas y la ruta se definen en la aplicación Roborock.',
  suction: 'Succión',
  waterFlow: 'Caudal de agua',
  cleaningCount: 'Número de pasadas',
  savedProfiles: 'Perfiles guardados',
  mopRoute: 'Ruta de fregado',
  mopIntensity: 'Intensidad de fregado',
  cancel: 'Cancelar',
  start: 'Iniciar',
  starting: 'Iniciando…',
  unsupported: 'No disponible',
  mapMissing: 'La entidad de mapa configurada no está disponible.',
  imageMissing: 'La entidad de mapa no proporciona una imagen.',
  calibrationMissing:
    'Falta la calibración de Roborock Custom Map. Instala y configura Roborock Custom Map.',
  roomsMissing:
    'Faltan los datos de habitaciones de Roborock Custom Map. No se han deducido zonas de selección.',
  roomUnmapped:
    'Este segmento no está asociado a un área de Home Assistant.',
  launched: 'Limpieza iniciada',
  floor: 'Planta',
  close: 'Cerrar',
  dockStation: 'Base',
  dockOverview: 'Lavado, vaciado, secado y ajustes de la base',
  empty: 'Vaciar',
  wash: 'Lavar',
  dry: 'Secar',
  dockSettings: 'Ajustes de la base',
  mopWashFrequency: 'Frecuencia de lavado de la mopa',
  washingMode: 'Modo de lavado',
  washTemperature: 'Temperatura del agua',
  dustbin: 'Depósito de polvo',
  autoEmpty: 'Vaciado automático',
  emptyMode: 'Modo de vaciado',
  drying: 'Secado',
  autoDry: 'Secado automático',
  dryDuration: 'Duración',
  safetyMaintenance: 'Seguridad y mantenimiento',
  childLock: 'Bloqueo infantil de la base',
  drainWaterTank: 'Vaciar el depósito de agua sucia del robot',
  drainWarning:
    'No está disponible mediante la integración actual de Roborock para Home Assistant. Usa la aplicación Roborock.',
  confirmEmpty: '¿Iniciar el vaciado de la base? Hará ruido.',
  confirmWash:
    '¿Iniciar el lavado de la mopa? Se activará la bomba de la base.',
  confirmDry:
    '¿Iniciar el secado de la mopa? Se activará el ventilador de la base.',
  confirmDrain: '¿Vaciar ahora el depósito de agua sucia del robot?',
  drainRejected:
    'Home Assistant no puede codificar correctamente este comando de Roborock en este momento. Usa la aplicación Roborock.',
  settingSaved: 'Ajuste de la base guardado',
  dockActionSent: 'Comando enviado a la base',
  active: 'Activo',
  inactive: 'Desactivado',
  stateCleaning: 'Limpiando',
  stateDocked: 'En la base',
  statePaused: 'En pausa',
  stateIdle: 'Inactivo',
  stateReturning: 'Volviendo a la base',
  stateCharging: 'Cargando',
  stateError: 'Error',
  stateUnavailable: 'No disponible',
  stateUnknown: 'Desconocido',
  prepareUpstairs: 'Preparar planta superior',
  preparingUpstairs: 'Preparando…',
  startUpstairs: 'Iniciar en la planta superior',
  dockAndFinish: 'Volver a la base y finalizar',
  newUpstairsJob: 'Nueva limpieza de la planta superior',
  assistedCarryTitle: 'Limpieza guiada en otra planta',
  assistedCarryDescription:
    'La base prepara la mopa y la tarjeta guía los dos traslados del robot y finaliza el mantenimiento de la base.',
  assisted_preparing_title: 'Preparando en la base',
  assisted_preparing_description:
    'Deteniendo el secado, lavando la mopa y llevando el robot al punto de recogida.',
  assisted_carry_upstairs_title: 'Lleva el robot a la planta superior',
  assisted_carry_upstairs_description:
    'Colócalo en un punto de inicio despejado y después inicia la limpieza guardada de aspirado y fregado.',
  assisted_cleaning_upstairs_title: 'Limpiando la planta superior',
  assisted_cleaning_upstairs_description:
    'Al terminar, el robot volverá a este punto de inicio de la planta superior.',
  assisted_carry_downstairs_title: 'Lleva el robot a la planta inferior',
  assisted_carry_downstairs_description:
    'Colócalo en la planta inferior cerca de la base o directamente sobre ella.',
  assisted_finishing_title: 'Finalizando en la base',
  assisted_finishing_description:
    'Volviendo a la base, vaciando el depósito, lavando la mopa y comprobando el secado automático.',
  assisted_complete_title: 'Limpieza de la planta superior completada',
  assisted_complete_description:
    'El robot está en la base, la mopa está lavada y el secado se ha iniciado si estaba configurado.',
  assisted_error_title: 'El asistente requiere atención',
  assisted_error_description:
    'Comprueba el robot y la base y, después, restablece el flujo para volver a intentarlo.',
  lastClean: 'Última limpieza',
  justNow: 'ahora mismo',
  yesterday: 'ayer',
  ago: 'hace',
  daysAgo: 'días',
  hourShort: 'h',
  minuteShort: 'min',
  preflightBlocked: 'No se puede iniciar todavía',
  preflightWarnings: 'Revisa antes de iniciar',
  startAnyway: 'Iniciar de todos modos',
  check_clean_water_empty: 'El depósito de agua limpia está vacío.',
  check_water_shortage: 'El robot indica que falta agua.',
  check_mop_detached: 'La mopa no está instalada.',
  check_water_box_detached: 'El depósito de agua no está instalado.',
  check_dirty_water_full: 'El depósito de agua sucia está lleno.',
  check_dock_error: 'La base indica un error:',
  check_low_battery: 'La batería está baja:',
  check_maintenance_overdue: 'Hay piezas que necesitan mantenimiento:',
  maintenance: 'Mantenimiento',
  maintenanceOk: 'Correcto',
  maintenanceDue: 'Próximo',
  maintenanceOverdue: 'Necesario',
  maintenanceUnknown: 'Desconocido',
  resetConsumable: 'Restablecer',
  confirmResetConsumable: '¿Restablecer este contador? Hazlo solo después de sustituir o limpiar la pieza.',
  enableResetHint: 'Para restablecer contadores desde aquí, habilita en Home Assistant los botones de restablecimiento del dispositivo Roborock.',
  consumable_main_brush: 'Cepillo principal',
  consumable_side_brush: 'Cepillo lateral',
  consumable_filter: 'Filtro',
  consumable_sensors: 'Sensores',
  consumable_strainer: 'Filtro de la base',
  consumable_mop: 'Mopa',
  consumable_roller: 'Cepillo giratorio',
  consumable_cleaning_brush: 'Cepillo de limpieza de la base',
  setupAttention: 'La configuración requiere atención',
  health_area_missing: 'La habitación {room} usa el área {area}, que ya no existe.',
  health_entity_missing: '{entity} ya no existe.',
  health_map_option_missing: 'El selector de mapas ya no ofrece {option}.',
  health_map_uncalibrated: '{entity} no tiene calibración del mapa.',
  roomAreaMissing: 'el área ya no existe',
  dismiss: 'Descartar',
  maintenanceBadge: 'Mantenimiento pendiente',
  setupTitle: 'Termina de configurar la tarjeta Roborock',
  setupIntro: 'Se necesitan algunos datos antes de que esta tarjeta pueda controlar la aspiradora.',
  prereq_home_assistant_version: 'Home Assistant 2026.8 o posterior',
  prereq_roborock_integration: 'La integración Roborock con una aspiradora',
  prereq_custom_map: 'La integración Roborock Custom Map',
  prereq_administrator: 'Una cuenta de administrador (para las áreas y los ayudantes)',
  setupFix: 'Corregir',
  setupOpenEditor: 'Después, edita esta tarjeta y selecciona Asistente de configuración.',
  setupConfigErrors: 'La configuración de la tarjeta requiere atención:',
  setupVacuumMissing: 'No existe la aspiradora configurada:',
  mapLoading: 'Cargando mapa…',
  mapLoadFailed: 'No se pudo cargar la imagen del mapa.',
  retry: 'Reintentar',
  vacuumOffline: 'La aspiradora está desconectada. Home Assistant no puede comunicarse con ella ahora.',
  vacuumErrorBanner: 'La aspiradora indica un error:',
  copyDiagnostics: 'Copiar diagnóstico',
  diagnosticsCopied: 'Diagnóstico copiado. Pégalo en tu incidencia de GitHub.',
  diagnosticsManual: 'Copia el texto siguiente en tu incidencia de GitHub.',
};

export type TranslationKey = keyof typeof en;

/** Translation with `{name}` placeholders filled in. */
export function tf(language: Language | undefined, key: TranslationKey, values: Record<string, string>): string {
  return t(language, key).replace(/\{(\w+)\}/g, (match, name: string) => values[name] ?? match);
}

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

  if (language === 'es') {
    return es[key];
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
  es: {
    quiet: 'Silencioso',
    balanced: 'Equilibrado',
    turbo: 'Turbo',
    max: 'Máximo',
    max_plus: 'Máximo+',
    slight: 'Muy bajo',
    low: 'Bajo',
    medium: 'Medio',
    moderate: 'Moderado',
    high: 'Alto',
    extreme: 'Extremo',
    fast: 'Rápido',
    standard: 'Estándar',
    deep: 'Intenso',
    deep_plus: 'Intenso+',
  },
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

<<<<<<< HEAD
type DockOptionLabels = Record<'smart' | 'light' | 'balanced' | 'deep' | 'max' | 'normal' | 'warm' | 'hot' | '2h' | '3h' | '4h', string>;

/** Dock setting values. Every language must name every value, so TypeScript catches gaps. */
export const DOCK_OPTION_LABELS: Record<Language, DockOptionLabels> = {
  en: {
    smart: 'Smart', light: 'Light', balanced: 'Balanced', deep: 'Deep', max: 'Max',
    normal: 'Normal', warm: 'Warm', hot: 'High temperature',
    '2h': '2 hours', '3h': '3 hours · Standard', '4h': '4 hours',
  },
  nl: {
    smart: 'Slim', light: 'Licht', balanced: 'Gebalanceerd', deep: 'Diep', max: 'Max',
    normal: 'Normaal', warm: 'Warm', hot: 'Hoge temperatuur',
    '2h': '2 uur', '3h': '3 uur · Standaard', '4h': '4 uur',
  },
  tr: {
    smart: 'Akıllı', light: 'Hafif', balanced: 'Dengeli', deep: 'Derin', max: 'Maksimum',
    normal: 'Normal', warm: 'Ilık', hot: 'Yüksek sıcaklık',
    '2h': '2 saat', '3h': '3 saat · Standart', '4h': '4 saat',
  },
  pl: {
    smart: 'Inteligentny', light: 'Lekki', balanced: 'Zrównoważony', deep: 'Głęboki', max: 'Maks.',
    normal: 'Normalna', warm: 'Ciepła', hot: 'Wysoka temperatura',
    '2h': '2 godziny', '3h': '3 godziny · Standard', '4h': '4 godziny',
  },
  es: {
    smart: 'Inteligente', light: 'Ligero', balanced: 'Equilibrado', deep: 'Intenso', max: 'Máximo',
    normal: 'Normal', warm: 'Templada', hot: 'Alta temperatura',
    '2h': '2 horas', '3h': '3 horas · Estándar', '4h': '4 horas',
  },
};

export function dockOptionText(language: Language | undefined, value: string): string {
  const labels: Record<string, string> = DOCK_OPTION_LABELS[language ?? 'en'] ?? DOCK_OPTION_LABELS.en;
  return labels[value] ?? (DOCK_OPTION_LABELS.en as Record<string, string>)[value] ?? value;
}

export function vacuumStateText(language: Language | undefined, state: string | undefined): string {
  if (!state) return t(language, 'stateUnknown');
  const keys: Record<string, TranslationKey> = {
    cleaning: 'stateCleaning',
    docked: 'stateDocked',
    paused: 'statePaused',
    idle: 'stateIdle',
    returning: 'stateReturning',
    charging: 'stateCharging',
    error: 'stateError',
    unavailable: 'stateUnavailable',
    unknown: 'stateUnknown',
  };
  const key = keys[state];
  return key ? t(language, key) : state.replaceAll('_', ' ').replace(/\b\w/g, (character) => character.toUpperCase());
}
