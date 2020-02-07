import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class PCFTimeline implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private mainContainer: HTMLDivElement;
	private h1 : HTMLHeadElement;
	private timelineContainer: HTMLDivElement;
	private mainUL : HTMLUListElement;
	
	private li1 : HTMLLIElement;
	private contentDiv1 : HTMLDivElement;
	private h31 : HTMLHeadElement;
	private p1 : HTMLParagraphElement;
	private pointDiv1 : HTMLDivElement;
	private dateDiv1 : HTMLDivElement;
	private h41 : HTMLHeadElement;

	private li2 : HTMLLIElement;
	private contentDiv2 : HTMLDivElement;
	private h32 : HTMLHeadElement;
	private p2 : HTMLParagraphElement;
	private pointDiv2 : HTMLDivElement;
	private dateDiv2 : HTMLDivElement;
	private h42 : HTMLHeadElement;

	private li3 : HTMLLIElement;
	private contentDiv3 : HTMLDivElement;
	private h33 : HTMLHeadElement;
	private p3 : HTMLParagraphElement;
	private pointDiv3 : HTMLDivElement;
	private dateDiv3 : HTMLDivElement;
	private h43 : HTMLHeadElement;

	private li4 : HTMLLIElement;
	private contentDiv4 : HTMLDivElement;
	private h34 : HTMLHeadElement;
	private p4 : HTMLParagraphElement;
	private pointDiv4 : HTMLDivElement;
	private dateDiv4 : HTMLDivElement;
	private h44 : HTMLHeadElement;

	private li5 : HTMLLIElement;
	private contentDiv5 : HTMLDivElement;
	private h35 : HTMLHeadElement;
	private p5 : HTMLParagraphElement;
	private pointDiv5 : HTMLDivElement;
	private dateDiv5 : HTMLDivElement;
	private h45 : HTMLHeadElement;
	

	private _context: ComponentFramework.Context<IInputs>;
	private _notifyOutputChanged: () => void;
	private _container: HTMLDivElement;

	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code

		// Add control initialization code
		this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
		this._container = container;

		this.mainContainer = document.createElement("div");
		this.mainContainer.className = "container";

		this.h1 = document.createElement("h1");
		this.h1.textContent = "Case Timeline";

		this.timelineContainer = document.createElement("div");
		this.timelineContainer.className = "timeline";

		this.mainUL = document.createElement("ul");

		//set 1
		this.li1 = document.createElement("li");		
		this.contentDiv1 = document.createElement("div");
		this.contentDiv1.className = "content";
		this.h31 = document.createElement("h3");
		this.h31.textContent = "Case Creation";
		this.p1 = document.createElement("p");
		this.p1.textContent = "Case created with 'Ramzz' as Officer-In-Charge";
		this.pointDiv1 = document.createElement("div");
		this.pointDiv1.className = "point";
		this.dateDiv1 = document.createElement("div");
		this.dateDiv1.className = "date";
		this.h41 = document.createElement("h4");
		this.h41.textContent = "1 February 2020";

		this.dateDiv1.appendChild(this.h41);
		this.contentDiv1.appendChild(this.h31);
		this.contentDiv1.appendChild(this.p1);
		this.li1.appendChild(this.contentDiv1);
		this.li1.appendChild(this.pointDiv1);
		this.li1.appendChild(this.dateDiv1);

		//end of set 1

		//set 2
		this.li2 = document.createElement("li");		
		this.contentDiv2 = document.createElement("div");
		this.contentDiv2.className = "content";
		this.h32 = document.createElement("h3");
		this.h32.textContent = "Case Escalation";
		this.p2 = document.createElement("p");
		this.p2.textContent = "Case is escalated to Quality Service Team";
		this.pointDiv2 = document.createElement("div");
		this.pointDiv2.className = "point";
		this.dateDiv2 = document.createElement("div");
		this.dateDiv2.className = "date";
		this.h42 = document.createElement("h4");
		this.h42.textContent = "2 February 2020";

		this.dateDiv2.appendChild(this.h42);
		this.contentDiv2.appendChild(this.h32);
		this.contentDiv2.appendChild(this.p2);
		this.li2.appendChild(this.contentDiv2);
		this.li2.appendChild(this.pointDiv2);
		this.li2.appendChild(this.dateDiv2);

		//end of set 2

		//set 3
		this.li3 = document.createElement("li");		
		this.contentDiv3 = document.createElement("div");
		this.contentDiv3.className = "content";
		this.h33 = document.createElement("h3");
		this.h33.textContent = "Case Assignment";
		this.p3 = document.createElement("p");
		this.p3.textContent = "Case is assigned to Jim Carey";
		this.pointDiv3 = document.createElement("div");
		this.pointDiv3.className = "point";
		this.dateDiv3 = document.createElement("div");
		this.dateDiv3.className = "date";
		this.h43 = document.createElement("h4");
		this.h43.textContent = "3 February 2020";

		this.dateDiv3.appendChild(this.h43);
		this.contentDiv3.appendChild(this.h33);
		this.contentDiv3.appendChild(this.p3);
		this.li3.appendChild(this.contentDiv3);
		this.li3.appendChild(this.pointDiv3);
		this.li3.appendChild(this.dateDiv3);
		//end of set 3

		//set 4
		this.li4 = document.createElement("li");		
		this.contentDiv4 = document.createElement("div");
		this.contentDiv4.className = "content";
		this.h34 = document.createElement("h3");
		this.h34.textContent = "Case Assignment";
		this.p4 = document.createElement("p");
		this.p4.textContent = "Case is assigned to Brad Hodge";
		this.pointDiv4 = document.createElement("div");
		this.pointDiv4.className = "point";
		this.dateDiv4 = document.createElement("div");
		this.dateDiv4.className = "date";
		this.h44 = document.createElement("h4");
		this.h44.textContent = "4 February 2020";

		this.dateDiv4.appendChild(this.h44);
		this.contentDiv4.appendChild(this.h34);
		this.contentDiv4.appendChild(this.p4);
		this.li4.appendChild(this.contentDiv4);
		this.li4.appendChild(this.pointDiv4);
		this.li4.appendChild(this.dateDiv4);
		//end of set 4

		//set 5
		this.li5 = document.createElement("li");		
		this.contentDiv5 = document.createElement("div");
		this.contentDiv5.className = "content";
		this.h35 = document.createElement("h3");
		this.h35.textContent = "Case Resolution";
		this.p5 = document.createElement("p");
		this.p5.textContent = "Case is resolved with remarks as 'Responed to the enquirer'";
		this.pointDiv5 = document.createElement("div");
		this.pointDiv5.className = "point";
		this.dateDiv5 = document.createElement("div");
		this.dateDiv5.className = "date";
		this.h45 = document.createElement("h4");
		this.h45.textContent = "5 February 2020";

		this.dateDiv5.appendChild(this.h45);
		this.contentDiv5.appendChild(this.h35);
		this.contentDiv5.appendChild(this.p5);
		this.li5.appendChild(this.contentDiv5);
		this.li5.appendChild(this.pointDiv5);
		this.li5.appendChild(this.dateDiv5);
		//end of set 5

		this.mainUL.appendChild(this.li1);
		this.mainUL.appendChild(this.li2);
		this.mainUL.appendChild(this.li3);
		this.mainUL.appendChild(this.li4);
		this.mainUL.appendChild(this.li5);

		this.timelineContainer.appendChild(this.mainUL);
		this.mainContainer.appendChild(this.h1);
		this.mainContainer.appendChild(this.timelineContainer);

		this._container.appendChild(this.mainContainer);	
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}
}