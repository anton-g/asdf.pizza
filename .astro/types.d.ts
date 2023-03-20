declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"advent22": {
"lucka-1.md": {
  id: "lucka-1.md",
  slug: "lucka-1",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-10.md": {
  id: "lucka-10.md",
  slug: "lucka-10",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-11.md": {
  id: "lucka-11.md",
  slug: "lucka-11",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-12.md": {
  id: "lucka-12.md",
  slug: "lucka-12",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-13.md": {
  id: "lucka-13.md",
  slug: "lucka-13",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-14.md": {
  id: "lucka-14.md",
  slug: "lucka-14",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-15.md": {
  id: "lucka-15.md",
  slug: "lucka-15",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-16.md": {
  id: "lucka-16.md",
  slug: "lucka-16",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-17.md": {
  id: "lucka-17.md",
  slug: "lucka-17",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-18.md": {
  id: "lucka-18.md",
  slug: "lucka-18",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-19.md": {
  id: "lucka-19.md",
  slug: "lucka-19",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-2.md": {
  id: "lucka-2.md",
  slug: "lucka-2",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-20.md": {
  id: "lucka-20.md",
  slug: "lucka-20",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-21.md": {
  id: "lucka-21.md",
  slug: "lucka-21",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-22.md": {
  id: "lucka-22.md",
  slug: "lucka-22",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-23.md": {
  id: "lucka-23.md",
  slug: "lucka-23",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-24.md": {
  id: "lucka-24.md",
  slug: "lucka-24",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-3.md": {
  id: "lucka-3.md",
  slug: "lucka-3",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-4.md": {
  id: "lucka-4.md",
  slug: "lucka-4",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-5.md": {
  id: "lucka-5.md",
  slug: "lucka-5",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-6.md": {
  id: "lucka-6.md",
  slug: "lucka-6",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-7.md": {
  id: "lucka-7.md",
  slug: "lucka-7",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-8.md": {
  id: "lucka-8.md",
  slug: "lucka-8",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
"lucka-9.md": {
  id: "lucka-9.md",
  slug: "lucka-9",
  body: string,
  collection: "advent22",
  data: InferEntrySchema<"advent22">
} & { render(): Render[".md"] },
},
"episodes": {
"1-pepp-och-depp.md": {
  id: "1-pepp-och-depp.md",
  slug: "1-pepp-och-depp",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"10-tillganglighet.md": {
  id: "10-tillganglighet.md",
  slug: "10-tillganglighet",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"11-hur-bygger-man-fran-grunden.md": {
  id: "11-hur-bygger-man-fran-grunden.md",
  slug: "11-hur-bygger-man-fran-grunden",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"12-att-rulla-av.md": {
  id: "12-att-rulla-av.md",
  slug: "12-att-rulla-av",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"13-intervjuer-intervjuer-intervjuer.md": {
  id: "13-intervjuer-intervjuer-intervjuer.md",
  slug: "13-intervjuer-intervjuer-intervjuer",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"14-alla-vagar-leder-till-angest.md": {
  id: "14-alla-vagar-leder-till-angest.md",
  slug: "14-alla-vagar-leder-till-angest",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"15-code-smells.md": {
  id: "15-code-smells.md",
  slug: "15-code-smells",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"16-varfor-hatar-utvecklare-moten.md": {
  id: "16-varfor-hatar-utvecklare-moten.md",
  slug: "16-varfor-hatar-utvecklare-moten",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"17-recoil-och-javascript-innovationer.md": {
  id: "17-recoil-och-javascript-innovationer.md",
  slug: "17-recoil-och-javascript-innovationer",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"18-att-hitta-sin-plats-i-ett-nytt-team.md": {
  id: "18-att-hitta-sin-plats-i-ett-nytt-team.md",
  slug: "18-att-hitta-sin-plats-i-ett-nytt-team",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"19-css-eller-det-ar-dags-for-ie11-att-do.md": {
  id: "19-css-eller-det-ar-dags-for-ie11-att-do.md",
  slug: "19-css-eller-det-ar-dags-for-ie11-att-do",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"2-avermind.md": {
  id: "2-avermind.md",
  slug: "2-avermind",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"20-react-teamets-julklapp-server-components.md": {
  id: "20-react-teamets-julklapp-server-components.md",
  slug: "20-react-teamets-julklapp-server-components",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"21-hyperventilera-i-en-pase.md": {
  id: "21-hyperventilera-i-en-pase.md",
  slug: "21-hyperventilera-i-en-pase",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"22-likheten-mellan-webbutveckling-och-trafikregler.md": {
  id: "22-likheten-mellan-webbutveckling-och-trafikregler.md",
  slug: "22-likheten-mellan-webbutveckling-och-trafikregler",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"23-det-ar-uppfriskande-med-tomater.md": {
  id: "23-det-ar-uppfriskande-med-tomater.md",
  slug: "23-det-ar-uppfriskande-med-tomater",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"24-det-ar-anonymt-att-kalla-sig-web-developer.md": {
  id: "24-det-ar-anonymt-att-kalla-sig-web-developer.md",
  slug: "24-det-ar-anonymt-att-kalla-sig-web-developer",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"25-1-ar-och-1-miljard.md": {
  id: "25-1-ar-och-1-miljard.md",
  slug: "25-1-ar-och-1-miljard",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"26-en-djup-kris-i-therese-relation.md": {
  id: "26-en-djup-kris-i-therese-relation.md",
  slug: "26-en-djup-kris-i-therese-relation",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"27-38-procent.md": {
  id: "27-38-procent.md",
  slug: "27-38-procent",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"28-ett-tydligt-kontrakt.md": {
  id: "28-ett-tydligt-kontrakt.md",
  slug: "28-ett-tydligt-kontrakt",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"29-sassy-css-in-js-modules.md": {
  id: "29-sassy-css-in-js-modules.md",
  slug: "29-sassy-css-in-js-modules",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"3-trevligt-att-traffas.md": {
  id: "3-trevligt-att-traffas.md",
  slug: "3-trevligt-att-traffas",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"30-typescript-ar-din-nemesis.md": {
  id: "30-typescript-ar-din-nemesis.md",
  slug: "30-typescript-ar-din-nemesis",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"31-processer-later-sa-trist.md": {
  id: "31-processer-later-sa-trist.md",
  slug: "31-processer-later-sa-trist",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"32-ett-bibliotek-med-komponenter.md": {
  id: "32-ett-bibliotek-med-komponenter.md",
  slug: "32-ett-bibliotek-med-komponenter",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"33-en-svag-parallel.md": {
  id: "33-en-svag-parallel.md",
  slug: "33-en-svag-parallel",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"34-vilket-fack-tillhor-du.md": {
  id: "34-vilket-fack-tillhor-du.md",
  slug: "34-vilket-fack-tillhor-du",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"35-jag-hor-vad-ni-sager-men-forstar-inte.md": {
  id: "35-jag-hor-vad-ni-sager-men-forstar-inte.md",
  slug: "35-jag-hor-vad-ni-sager-men-forstar-inte",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"36-mitt-hemskaste-ljud-ar-prassel.md": {
  id: "36-mitt-hemskaste-ljud-ar-prassel.md",
  slug: "36-mitt-hemskaste-ljud-ar-prassel",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"37-det-ar-osynligt-for-mig.md": {
  id: "37-det-ar-osynligt-for-mig.md",
  slug: "37-det-ar-osynligt-for-mig",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"38-peters-princip.md": {
  id: "38-peters-princip.md",
  slug: "38-peters-princip",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"39-en-crash-course-i-pinsam-tystnad.md": {
  id: "39-en-crash-course-i-pinsam-tystnad.md",
  slug: "39-en-crash-course-i-pinsam-tystnad",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"4-draw-wtf.md": {
  id: "4-draw-wtf.md",
  slug: "4-draw-wtf",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"40-frustrationens-uppgang-och-fall.md": {
  id: "40-frustrationens-uppgang-och-fall.md",
  slug: "40-frustrationens-uppgang-och-fall",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"41-en-fysisk-paverkan-pa-hjarnan.md": {
  id: "41-en-fysisk-paverkan-pa-hjarnan.md",
  slug: "41-en-fysisk-paverkan-pa-hjarnan",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"42-react-18.md": {
  id: "42-react-18.md",
  slug: "42-react-18",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"43-ett-till-ett-mellan-tid-och-erfarenhet.md": {
  id: "43-ett-till-ett-mellan-tid-och-erfarenhet.md",
  slug: "43-ett-till-ett-mellan-tid-och-erfarenhet",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"44-nyarsquiz.md": {
  id: "44-nyarsquiz.md",
  slug: "44-nyarsquiz",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"45-paketdebakel.md": {
  id: "45-paketdebakel.md",
  slug: "45-paketdebakel",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"46-stack-ove-och-kjell-kod.md": {
  id: "46-stack-ove-och-kjell-kod.md",
  slug: "46-stack-ove-och-kjell-kod",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"47-for-valdigt-lange-sedan.md": {
  id: "47-for-valdigt-lange-sedan.md",
  slug: "47-for-valdigt-lange-sedan",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"48-the-year-of-state-machines.md": {
  id: "48-the-year-of-state-machines.md",
  slug: "48-the-year-of-state-machines",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"49-state-of-js.md": {
  id: "49-state-of-js.md",
  slug: "49-state-of-js",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"5-code-reviews.md": {
  id: "5-code-reviews.md",
  slug: "5-code-reviews",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"50-langst-ner-i-pyramiden.md": {
  id: "50-langst-ner-i-pyramiden.md",
  slug: "50-langst-ner-i-pyramiden",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"51-stoppa-huvudet-i-sanden.md": {
  id: "51-stoppa-huvudet-i-sanden.md",
  slug: "51-stoppa-huvudet-i-sanden",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"52-en-nerkokad-presentation.md": {
  id: "52-en-nerkokad-presentation.md",
  slug: "52-en-nerkokad-presentation",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"53-en-lyckad-brittisk-rekrytering.md": {
  id: "53-en-lyckad-brittisk-rekrytering.md",
  slug: "53-en-lyckad-brittisk-rekrytering",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"54-fraga-bjornen.md": {
  id: "54-fraga-bjornen.md",
  slug: "54-fraga-bjornen",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"55-att-bryta-mot-sin-egen-code-of-conduct.md": {
  id: "55-att-bryta-mot-sin-egen-code-of-conduct.md",
  slug: "55-att-bryta-mot-sin-egen-code-of-conduct",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"56-ett-kraset-gang-manniskor.md": {
  id: "56-ett-kraset-gang-manniskor.md",
  slug: "56-ett-kraset-gang-manniskor",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"57-jag-och-mina-liberala-glasogon.md": {
  id: "57-jag-och-mina-liberala-glasogon.md",
  slug: "57-jag-och-mina-liberala-glasogon",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"58-totalt-ointresserad-av-kubernetes.md": {
  id: "58-totalt-ointresserad-av-kubernetes.md",
  slug: "58-totalt-ointresserad-av-kubernetes",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"59-man-ska-inte-prata-skit-om-kod-men-here-we-go.md": {
  id: "59-man-ska-inte-prata-skit-om-kod-men-here-we-go.md",
  slug: "59-man-ska-inte-prata-skit-om-kod-men-here-we-go",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"6-att-koppla-bort-jobbet.md": {
  id: "6-att-koppla-bort-jobbet.md",
  slug: "6-att-koppla-bort-jobbet",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"60-vi-slanger-bara-ut.md": {
  id: "60-vi-slanger-bara-ut.md",
  slug: "60-vi-slanger-bara-ut",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"61-en-startupresa.md": {
  id: "61-en-startupresa.md",
  slug: "61-en-startupresa",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"62-du-har-gett-mig-nagot-att-tanka-pa.md": {
  id: "62-du-har-gett-mig-nagot-att-tanka-pa.md",
  slug: "62-du-har-gett-mig-nagot-att-tanka-pa",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"63-en-faktura-for-politiksnacket.md": {
  id: "63-en-faktura-for-politiksnacket.md",
  slug: "63-en-faktura-for-politiksnacket",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"64-fem-sekunders-nervositet.md": {
  id: "64-fem-sekunders-nervositet.md",
  slug: "64-fem-sekunders-nervositet",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"65-andra-lite-i-schemat-bara.md": {
  id: "65-andra-lite-i-schemat-bara.md",
  slug: "65-andra-lite-i-schemat-bara",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"66-hur-mar-du-nu-da.md": {
  id: "66-hur-mar-du-nu-da.md",
  slug: "66-hur-mar-du-nu-da",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"67-fyre-festival-for-utvecklare.md": {
  id: "67-fyre-festival-for-utvecklare.md",
  slug: "67-fyre-festival-for-utvecklare",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"68-jag-far-brasklappa-hur-mycket-jag-vill.md": {
  id: "68-jag-far-brasklappa-hur-mycket-jag-vill.md",
  slug: "68-jag-far-brasklappa-hur-mycket-jag-vill",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"69-javascript-ar-ju-react.md": {
  id: "69-javascript-ar-ju-react.md",
  slug: "69-javascript-ar-ju-react",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"7-en-deadline-i-augusti.md": {
  id: "7-en-deadline-i-augusti.md",
  slug: "7-en-deadline-i-augusti",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"70-jamstack-hit-och-jamstack-dit.md": {
  id: "70-jamstack-hit-och-jamstack-dit.md",
  slug: "70-jamstack-hit-och-jamstack-dit",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"71-en-startupresa-del-2-eller-3.md": {
  id: "71-en-startupresa-del-2-eller-3.md",
  slug: "71-en-startupresa-del-2-eller-3",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"72-en-kossa-i-browsern.md": {
  id: "72-en-kossa-i-browsern.md",
  slug: "72-en-kossa-i-browsern",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"73-det-blev-inget-amne.md": {
  id: "73-det-blev-inget-amne.md",
  slug: "73-det-blev-inget-amne",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"8-privilegiet-att-inte-känna-sig-som-en-bluff.md": {
  id: "8-privilegiet-att-inte-känna-sig-som-en-bluff.md",
  slug: "8-privilegiet-att-inte-känna-sig-som-en-bluff",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
"9-kodkonventioner.md": {
  id: "9-kodkonventioner.md",
  slug: "9-kodkonventioner",
  body: string,
  collection: "episodes",
  data: InferEntrySchema<"episodes">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
