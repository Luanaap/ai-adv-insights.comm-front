export type CustomIconColorType =
	| "emphasis-base-low"
	| "emphasis-base-medium"
	| "emphasis-base-high"
	| "emphasis-base-disabled"
	| "emphasis-base-low-inverse"
	| "emphasis-base-medium-inverse"
	| "emphasis-base-high-inverse"
	| "emphasis-base-disabled-inverse"
	| "emphasis-base-medium-70"
	| "primary-base"
	| "primary-base-inverse"
	| "secondary-base"
	| "secondary-base-inverse"
	| "status-error"
	| "status-error-inverse"
	| "status-success"
	| "status-success-inverse"
	| "status-informative"
	| "status-informative-inverse"
	| "status-warning"
	| "status-warning-inverse"
	| "fixed-white";

export type CustomIconSizeType = 16 | 24 | 32 | 40 | 48 | 64 | 72 | 80 | 96 | 112 | 128 | 264;

export interface CustomIconContainerProps {
	name?: IconNames;
	color?: CustomIconColorType;
	iconSize?: number;
	circle?: boolean;
	outline?: boolean;
	inverse?: boolean;
	customCircleBackgroundColor?: string;
	role?: string;
	tabIndex?: number;
	className?: unknown;
	onClick?: () => void;
	id?: string;
	padding?: string;
	customColor?: string;
	customStyle?: any;
	margin?: string;
}

export type IconNames =
	| "transport-and-storage"
	| "public-services"
	| "manufacture"
	| "open-finance"
	| "batch-on"
	| "dislike-on"
	| "management-on"
	| "operation"
	| "online-shopping"
	| "market-grid-on"
	| "market-grid"
	| "tools-search-on"
	| "x"
	| "cashback-points"
	| "decision-tree"
	| "duplicate"
	| "exchanged-traded-note"
	| "invest-points"
	| "invoice-points"
	| "maximize"
	| "minimize"
	| "notification-off"
	| "open-insurance"
	| "points-btg"
	| "transfer-points"
	| "volatility"
	| "trend"
	| "theta"
	| "rho"
	| "remove"
	| "oscillation"
	| "more-options-vertical"
	| "microsoft"
	| "indicators"
	| "gamma"
	| "financial-volume"
	| "delta"
	| "clock-on"
	| "beta"
	| "artificial-intelligence"
	| "alpha"
	| "bring-front"
	| "send-back"
	| "draw-circle"
	| "draw-elipse"
	| "draw-marker"
	| "eraser"
	| "file-horizontal"
	| "gain-stop"
	| "magnet-off"
	| "speed-high"
	| "speed-max"
	| "speed-normal"
	| "speed-slow"
	| "strong-magnet"
	| "wifi-off"
	| "align-center"
	| "align-justify"
	| "align-left"
	| "align-right"
	| "anchor-channel"
	| "anchor-point"
	| "cancel-account"
	| "card-list-view"
	| "card-view"
	| "concierge"
	| "corporation"
	| "email-open"
	| "embed"
	| "explore-on"
	| "explore"
	| "fixed-income-chart-on"
	| "gas"
	| "investments-on"
	| "investments"
	| "meter-high"
	| "meter-low"
	| "meter-neutral"
	| "news"
	| "notification-add-on"
	| "numbered-list"
	| "plantation"
	| "redo"
	| "send"
	| "style-bold"
	| "style-italic"
	| "style-paragraph"
	| "style-quote"
	| "style-strikethroug"
	| "style-underline"
	| "sugar-and-fuel"
	| "table"
	| "text-style"
	| "tools-filter-funnel"
	| "traffic-and-highways"
	| "treemap"
	| "undo"
	| "user-add-on"
	| "user-login-on"
	| "video-on"
	| "video"
	| "unlink"
	| "tools-set"
	| "settings"
	| "folder-upload"
	| "football"
	| "folder-check"
	| "link"
	| "associations-on"
	| "bank-on"
	| "benefits-on"
	| "bulb-on"
	| "cash-withdraw-on"
	| "contract-agreement-on"
	| "current-wallet-on"
	| "current-wallet"
	| "color"
	| "comment"
	| "dark"
	| "draw-arrow"
	| "draw-pencil"
	| "draw-square"
	| "draw-triangle"
	| "disconnect-devices-on"
	| "exchange-on"
	| "financing-on"
	| "file-on"
	| "glassdoor"
	| "insurance-on"
	| "invest-on"
	| "operationalization-on"
	| "order-sent"
	| "payroll-on"
	| "pizza-chart-on"
	| "products-on"
	| "question-on"
	| "school-on"
	| "settings-on"
	| "tv-pay-on"
	| "user-clients-on"
	| "user-manage-on"
	| "wallet-virtual-on"
	| "token"
	| "renegociations"
	| "connection-error"
	| "chevron-down"
	| "chevron-left"
	| "chevron-right"
	| "chevron-up"
	| "private-pension"
	| "add-circle"
	| "bookmark-on"
	| "card-on"
	| "drag-drop"
	| "drag-drop-vertical"
	| "home-on"
	| "investment-fund"
	| "language"
	| "linkedin"
	| "light"
	| "line-density"
	| "line-style"
	| "nft"
	| "podcast"
	| "remove-circle"
	| "save"
	| "spotify"
	| "support-on"
	| "telegram"
	| "twitter"
	| "add-minus"
	| "add-plus"
	| "aggressive"
	| "agribusiness"
	| "agriculture"
	| "agro"
	| "airline"
	| "anchor-diagonal"
	| "anchor-fibonacci-levels"
	| "anchor-horizontal"
	| "android"
	| "animal"
	| "anticipate"
	| "apple"
	| "archive"
	| "associations"
	| "attach"
	| "attention"
	| "automatic-transfer"
	| "bank"
	| "bank-like"
	| "bank-remove"
	| "basic-materials"
	| "bank-branch"
	| "bank-slip"
	| "batch"
	| "batch-transfer"
	| "beauty"
	| "benefits"
	| "bills-receive"
	| "bitcoin"
	| "block"
	| "booklet"
	| "bookmark"
	| "borrower-services"
	| "bulb"
	| "camera"
	| "cancel"
	| "cancel-orders"
	| "cancel-purchase"
	| "cancel-schedule"
	| "candle-chart"
	| "capital-goods"
	| "car"
	| "card"
	| "car-fine"
	| "car-parking"
	| "car-rental"
	| "cash-withdraw"
	| "celebration"
	| "change-user"
	| "change-position"
	| "chargeback"
	| "charging-rule"
	| "chat"
	| "check"
	| "checking-copy"
	| "chemicals"
	| "chip"
	| "cinema"
	| "claim-notice"
	| "clock"
	| "close"
	| "coin"
	| "commission"
	| "communication"
	| "competition"
	| "configuration"
	| "conservative"
	| "construction"
	| "contactless"
	| "contactless-password"
	| "content-and-services"
	| "contract-agreement"
	| "contract-signature"
	| "corporate-floors"
	| "cruise"
	| "cryptocoin"
	| "cryptopedia"
	| "culture"
	| "current-account-on"
	| "current-account"
	| "customer-service"
	| "deposit"
	| "digital-content"
	| "direct-sale"
	| "disconnect-devices"
	| "dislike"
	| "doc-chargeback"
	| "doc-in"
	| "doc-doc"
	| "doc-ppt"
	| "doc-xls"
	| "doc-jpg"
	| "doc-out"
	| "doc-pdf"
	| "doc-scheduled"
	| "down"
	| "arrow-down"
	| "download"
	| "drink"
	| "drugstore"
	| "duty-free"
	| "edit-copy"
	| "edit-pencil"
	| "edit-trash"
	| "eletronics"
	| "email"
	| "empty"
	| "empty-search"
	| "endorsement"
	| "energy"
	| "environment"
	| "ethereum"
	| "ex-bank"
	| "exchange"
	| "expand-view"
	| "external-link"
	| "facebook"
	| "fashion"
	| "favorite"
	| "favorite-on"
	| "fee"
	| "fees-fines"
	| "fgc"
	| "file"
	| "financial-contribution"
	| "financing"
	| "fixed-income-chart"
	| "fixed-income"
	| "flash-auto"
	| "flash-off"
	| "flash-on"
	| "fuel"
	| "future"
	| "gambling"
	| "games"
	| "google"
	| "government"
	| "gym"
	| "health-and-education"
	| "high-financial-reserve"
	| "historic"
	| "home"
	| "home-and-decor"
	| "hospital"
	| "hotel"
	| "hotels"
	| "housing"
	| "house-location"
	| "hybrids"
	| "id-face"
	| "id-facial-recognition"
	| "id-touch"
	| "image"
	| "income"
	| "industry"
	| "info"
	| "info-on"
	| "infrastructure"
	| "instagram"
	| "installments-total"
	| "insurance"
	| "insured"
	| "international"
	| "invest"
	| "invoice"
	| "invoice-anticipate"
	| "invoice-anticipation"
	| "it"
	| "jewelry"
	| "left"
	| "arrow-left"
	| "legal"
	| "like"
	| "like-on"
	| "limite-mais"
	| "line-chart"
	| "lock"
	| "locker-close"
	| "locker-open"
	| "logoff"
	| "lottery"
	| "low-reserve"
	| "management"
	| "magnet"
	| "medicine"
	| "menu-pin"
	| "menu-unpin"
	| "medium-reserve"
	| "metals"
	| "minimize-view"
	| "mining"
	| "moderate"
	| "move"
	| "money"
	| "money-application"
	| "money-in"
	| "money-out"
	| "more-options"
	| "music"
	| "new-claim"
	| "non-motorized"
	| "notification-add"
	| "notification"
	| "notification-on"
	| "offer-book"
	| "offshore-analysis"
	| "offshore"
	| "online"
	| "onshore-analysis"
	| "onshore"
	| "open-banking"
	| "opening"
	| "operationalization"
	| "order-received"
	| "others"
	| "outlook"
	| "page-first"
	| "page-last"
	| "paid-back"
	| "pause"
	| "payment-bills"
	| "payment-scheduled"
	| "payment-tribute"
	| "payroll"
	| "pets"
	| "pin"
	| "pix"
	| "pix-key"
	| "pizza-chart"
	| "play"
	| "play-next"
	| "play-previous"
	| "points"
	| "policy"
	| "popcorn"
	| "portability"
	| "printer"
	| "products"
	| "profitability-negative"
	| "profitability-positive"
	| "property"
	| "property-secured"
	| "proposal"
	| "public-utility"
	| "purchase-and-sales"
	| "qr-code"
	| "question"
	| "rate-off"
	| "rate-on"
	| "read-bank-slip"
	| "receipt"
	| "receivables"
	| "recent"
	| "reclaim-money"
	| "refresh"
	| "remote-file"
	| "remunerated-balance"
	| "rental"
	| "research"
	| "restaurant"
	| "retail"
	| "rewards"
	| "right"
	| "rotate-left"
	| "rotate-right"
	| "ruller"
	| "arrow-right"
	| "rural"
	| "salary"
	| "sanitation"
	| "schedule"
	| "scheduled"
	| "schedule-recurring"
	| "school"
	| "services"
	| "share"
	| "share-android"
	| "shipping"
	| "shipping-remittance"
	| "simulator"
	| "smile"
	| "solar-credit"
	| "sound-off"
	| "sound-on"
	| "sports"
	| "stack-burger-menu"
	| "stack-burger-menu-plus"
	| "stack-details"
	| "stack-list"
	| "status-disapproved"
	| "status-error"
	| "status-pause"
	| "status-refresh"
	| "status-success"
	| "status-warning"
	| "stripe"
	| "subscription"
	| "supermarket"
	| "supplies"
	| "support"
	| "surety"
	| "swap-circle"
	| "tag"
	| "tariff"
	| "ted-chargeback"
	| "ted-in"
	| "ted-out"
	| "ted-scheduled"
	| "tef-chargeback"
	| "tef-in"
	| "tef-out"
	| "tef-scheduled"
	| "telecomunication"
	| "telephony"
	| "tennis-arena"
	| "theater"
	| "timer"
	| "tools-analysis"
	| "tools-filter"
	| "tools-search"
	| "tools-set"
	| "tools-tools"
	| "tools-widgets"
	| "touch-screen"
	| "town-hall"
	| "transaction-limit"
	| "transfer"
	| "transportation"
	| "travel"
	| "turn-camera"
	| "tv-pay"
	| "unified-invoice"
	| "up"
	| "arrow-up"
	| "upload"
	| "user-add"
	| "user-clients"
	| "user-login"
	| "user-manage"
	| "user-remove-access"
	| "vacation"
	| "view-pass"
	| "visibility-on"
	| "visibility-off"
	| "voucher"
	| "wallet-comparison"
	| "wallet-virtual"
	| "wellness"
	| "whatsapp"
	| "wholesale"
	| "widget-collapse"
	| "widget-expansion"
	| "wifi"
	| "youtube"
	| "zoom-in"
	| "zoom-out";

export const iconNamesArray: IconNames[] = [
	"transport-and-storage",
	"public-services",
	"manufacture",
	"open-finance",
	"batch-on",
	"dislike-on",
	"management-on",
	"operation",
	"online-shopping",
	"market-grid-on",
	"market-grid",
	"tools-search-on",
	"x",
	"cashback-points",
	"decision-tree",
	"duplicate",
	"exchanged-traded-note",
	"invest-points",
	"invoice-points",
	"maximize",
	"minimize",
	"notification-off",
	"open-insurance",
	"points-btg",
	"transfer-points",
	"volatility",
	"trend",
	"theta",
	"rho",
	"remove",
	"oscillation",
	"more-options-vertical",
	"microsoft",
	"indicators",
	"gamma",
	"financial-volume",
	"delta",
	"clock-on",
	"beta",
	"artificial-intelligence",
	"alpha",
	"bring-front",
	"send-back",
	"draw-circle",
	"draw-elipse",
	"draw-marker",
	"eraser",
	"file-horizontal",
	"gain-stop",
	"magnet-off",
	"speed-high",
	"speed-max",
	"speed-normal",
	"speed-slow",
	"strong-magnet",
	"wifi-off",
	"align-center",
	"align-justify",
	"align-left",
	"align-right",
	"anchor-channel",
	"anchor-point",
	"cancel-account",
	"card-list-view",
	"card-view",
	"concierge",
	"corporation",
	"email-open",
	"embed",
	"explore-on",
	"explore",
	"fixed-income-chart-on",
	"gas",
	"investments-on",
	"investments",
	"meter-high",
	"meter-low",
	"meter-neutral",
	"news",
	"notification-add-on",
	"numbered-list",
	"plantation",
	"redo",
	"send",
	"style-bold",
	"style-italic",
	"style-paragraph",
	"style-quote",
	"style-strikethroug",
	"style-underline",
	"sugar-and-fuel",
	"table",
	"text-style",
	"tools-filter-funnel",
	"traffic-and-highways",
	"treemap",
	"undo",
	"user-add-on",
	"user-login-on",
	"video-on",
	"video",
	"unlink",
	"tools-set",
	"settings",
	"folder-upload",
	"football",
	"folder-check",
	"link",
	"associations-on",
	"bank-on",
	"benefits-on",
	"bulb-on",
	"cash-withdraw-on",
	"contract-agreement-on",
	"current-wallet-on",
	"current-wallet",
	"color",
	"comment",
	"dark",
	"draw-arrow",
	"draw-pencil",
	"draw-square",
	"draw-triangle",
	"disconnect-devices-on",
	"exchange-on",
	"financing-on",
	"file-on",
	"glassdoor",
	"insurance-on",
	"invest-on",
	"operationalization-on",
	"order-sent",
	"payroll-on",
	"pizza-chart-on",
	"products-on",
	"question-on",
	"school-on",
	"settings-on",
	"tv-pay-on",
	"user-clients-on",
	"user-manage-on",
	"wallet-virtual-on",
	"token",
	"renegociations",
	"connection-error",
	"chevron-down",
	"chevron-left",
	"chevron-right",
	"chevron-up",
	"private-pension",
	"add-circle",
	"bookmark-on",
	"card-on",
	"drag-drop",
	"drag-drop-vertical",
	"home-on",
	"investment-fund",
	"language",
	"linkedin",
	"light",
	"line-density",
	"line-style",
	"nft",
	"podcast",
	"remove-circle",
	"save",
	"spotify",
	"support-on",
	"telegram",
	"twitter",
	"add-minus",
	"add-plus",
	"aggressive",
	"agribusiness",
	"agriculture",
	"agro",
	"airline",
	"anchor-diagonal",
	"anchor-fibonacci-levels",
	"anchor-horizontal",
	"android",
	"animal",
	"anticipate",
	"apple",
	"archive",
	"associations",
	"attach",
	"attention",
	"automatic-transfer",
	"bank",
	"bank-like",
	"bank-remove",
	"basic-materials",
	"bank-branch",
	"bank-slip",
	"batch",
	"batch-transfer",
	"beauty",
	"benefits",
	"bills-receive",
	"bitcoin",
	"block",
	"booklet",
	"bookmark",
	"borrower-services",
	"bulb",
	"camera",
	"cancel",
	"cancel-orders",
	"cancel-purchase",
	"cancel-schedule",
	"candle-chart",
	"capital-goods",
	"car",
	"card",
	"car-fine",
	"car-parking",
	"car-rental",
	"cash-withdraw",
	"celebration",
	"change-user",
	"change-position",
	"chargeback",
	"charging-rule",
	"chat",
	"check",
	"checking-copy",
	"chemicals",
	"chip",
	"cinema",
	"claim-notice",
	"clock",
	"close",
	"coin",
	"commission",
	"communication",
	"competition",
	"configuration",
	"conservative",
	"construction",
	"contactless",
	"contactless-password",
	"content-and-services",
	"contract-agreement",
	"contract-signature",
	"corporate-floors",
	"cruise",
	"cryptocoin",
	"cryptopedia",
	"culture",
	"current-account-on",
	"current-account",
	"customer-service",
	"deposit",
	"digital-content",
	"direct-sale",
	"disconnect-devices",
	"dislike",
	"doc-chargeback",
	"doc-in",
	"doc-doc",
	"doc-ppt",
	"doc-xls",
	"doc-jpg",
	"doc-out",
	"doc-pdf",
	"doc-scheduled",
	"down",
	"arrow-down",
	"download",
	"drink",
	"drugstore",
	"duty-free",
	"edit-copy",
	"edit-pencil",
	"edit-trash",
	"eletronics",
	"email",
	"empty",
	"empty-search",
	"endorsement",
	"energy",
	"environment",
	"ethereum",
	"ex-bank",
	"exchange",
	"expand-view",
	"external-link",
	"facebook",
	"fashion",
	"favorite",
	"favorite-on",
	"fee",
	"fees-fines",
	"fgc",
	"file",
	"financial-contribution",
	"financing",
	"fixed-income-chart",
	"fixed-income",
	"flash-auto",
	"flash-off",
	"flash-on",
	"fuel",
	"future",
	"gambling",
	"games",
	"google",
	"government",
	"gym",
	"health-and-education",
	"high-financial-reserve",
	"historic",
	"home",
	"home-and-decor",
	"hospital",
	"hotel",
	"hotels",
	"housing",
	"house-location",
	"hybrids",
	"id-face",
	"id-facial-recognition",
	"id-touch",
	"image",
	"income",
	"industry",
	"info",
	"info-on",
	"infrastructure",
	"instagram",
	"installments-total",
	"insurance",
	"insured",
	"international",
	"invest",
	"invoice",
	"invoice-anticipate",
	"invoice-anticipation",
	"it",
	"jewelry",
	"left",
	"arrow-left",
	"legal",
	"like",
	"like-on",
	"limite-mais",
	"line-chart",
	"lock",
	"locker-close",
	"locker-open",
	"logoff",
	"lottery",
	"low-reserve",
	"management",
	"magnet",
	"medicine",
	"menu-pin",
	"menu-unpin",
	"medium-reserve",
	"metals",
	"minimize-view",
	"mining",
	"moderate",
	"move",
	"money",
	"money-application",
	"money-in",
	"money-out",
	"more-options",
	"music",
	"new-claim",
	"non-motorized",
	"notification-add",
	"notification",
	"notification-on",
	"offer-book",
	"offshore-analysis",
	"offshore",
	"online",
	"onshore-analysis",
	"onshore",
	"open-banking",
	"opening",
	"operationalization",
	"order-received",
	"others",
	"outlook",
	"page-first",
	"page-last",
	"paid-back",
	"pause",
	"payment-bills",
	"payment-scheduled",
	"payment-tribute",
	"payroll",
	"pets",
	"pin",
	"pix",
	"pix-key",
	"pizza-chart",
	"play",
	"play-next",
	"play-previous",
	"points",
	"policy",
	"popcorn",
	"portability",
	"printer",
	"products",
	"profitability-negative",
	"profitability-positive",
	"property",
	"property-secured",
	"proposal",
	"public-utility",
	"purchase-and-sales",
	"qr-code",
	"question",
	"rate-off",
	"rate-on",
	"read-bank-slip",
	"receipt",
	"receivables",
	"recent",
	"reclaim-money",
	"refresh",
	"remote-file",
	"remunerated-balance",
	"rental",
	"research",
	"restaurant",
	"retail",
	"rewards",
	"right",
	"rotate-left",
	"rotate-right",
	"ruller",
	"arrow-right",
	"rural",
	"salary",
	"sanitation",
	"schedule",
	"scheduled",
	"schedule-recurring",
	"school",
	"services",
	"share",
	"share-android",
	"shipping",
	"shipping-remittance",
	"simulator",
	"smile",
	"solar-credit",
	"sound-off",
	"sound-on",
	"sports",
	"stack-burger-menu",
	"stack-burger-menu-plus",
	"stack-details",
	"stack-list",
	"status-disapproved",
	"status-error",
	"status-pause",
	"status-refresh",
	"status-success",
	"status-warning",
	"stripe",
	"subscription",
	"supermarket",
	"supplies",
	"support",
	"surety",
	"swap-circle",
	"tag",
	"tariff",
	"ted-chargeback",
	"ted-in",
	"ted-out",
	"ted-scheduled",
	"tef-chargeback",
	"tef-in",
	"tef-out",
	"tef-scheduled",
	"telecomunication",
	"telephony",
	"tennis-arena",
	"theater",
	"timer",
	"tools-analysis",
	"tools-filter",
	"tools-search",
	"tools-set",
	"tools-tools",
	"tools-widgets",
	"touch-screen",
	"town-hall",
	"transaction-limit",
	"transfer",
	"transportation",
	"travel",
	"turn-camera",
	"tv-pay",
	"unified-invoice",
	"up",
	"arrow-up",
	"upload",
	"user-add",
	"user-clients",
	"user-login",
	"user-manage",
	"user-remove-access",
	"vacation",
	"view-pass",
	"visibility-on",
	"visibility-off",
	"voucher",
	"wallet-comparison",
	"wallet-virtual",
	"wellness",
	"whatsapp",
	"wholesale",
	"widget-collapse",
	"widget-expansion",
	"wifi",
	"youtube",
	"zoom-in",
	"zoom-out",
];
