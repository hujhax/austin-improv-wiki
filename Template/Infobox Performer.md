<noinclude>
## Usage
This template lists standard, useful information about an improv performer.
<pre>
{{Infobox Performer
|Name	=		
|Picture=	
|Theater=			
|Years	=	
|Instruments = 
}}
</pre>


## Attributes
{| class="wikitable" style="line-height:1.3em;"
!style="background:gray; text-align:left;"| Parameter
!style="background:gray; text-align:left;"| Explanation
|-
| *Name*       || The performer's name.
|-
| *Picture*           || A picture of the performer.
|-
| *Theater*           || The performer's primary theater affliation.  (This defaults to "None" if it's left blank.)
|-
| *Years*     || The years that the performer was active, for instance "1993-1997".  If he or she is still actively performing, set it to something like "1998-Present".  Note that these are the years the performer was active in **Austin's** improv community, not just improv in general -- so if an improvisor moved to Austin in 2004, the start date is 2004.
| *Instruments*     || For musicians, what instrument(s) they play.
|}
</noinclude>

<div>
	<table class="infobox infobox-performer">
		<tr>
			<th colspan="2" class="infobox-header">{{{Name|Performer Name}}}</th>
		</tr>
		<tr class="">
			<td colspan="2" class="" class="infobox-picture">
				![[{{{Picture]]
			</td>
		</tr>
		<tr class="">
			<th scope="row" class="category-header">Primary Theater</th>
			<td class="category">{{{Theater|None}}}</td>
		</tr>
		<tr class="">
			<th scope="row" class="category-header">Years Active</th>
			<td class="category">{{{Years|Unknown}}}</td>
		</tr>
{{#if: {{{Instruments|}}} |
		<tr class="">
			<th scope="row" class="category-header">Instrument(s)</th>
			<td class="category">{{{Years|Unknown}}}</td>
		</tr>
|}}
	</table>
</div>