<noinclude>
## Usage
This template lists standard, useful information about an improv show.
<pre>
{{Infobox Show
|Name	=						
|Picture	=						
|Theater =						
|Director =					
|Assistant Director =	
|Producer =					
|Music =      					
|Tech =      					
|Cast	=							
|Run	=							
|Subsequent Runs = 		
}}
</pre>


## Attributes
{| class="wikitable" style="line-height:1.3em;"
!style="background:gray; text-align:left;"| Parameter
!style="background:gray; text-align:left;"| Explanation
|-
| *Name*       || The name of the show.
|-
| *Picture*           || A picture associated with the show; typically the publicity poster.
|-
| *Theater*           || The theater where the show happened.  In some cases, this could be more than one theater.
|-
| *Director*           || The person or persons who directed the show.
|-
| *Assistant Director* || List any assistant director here.
|-
| *Producer*           || The entity (such as [[Gnap!]]) that produced the show, if that's different from the theater.
|-
| *Tech*           || Who teched the show.  Use the [[Template/Unbulleted list|unbulleted list template]] to make a list of technical improvisors, if necessary.
|-
| *Cast*           || Who was in the show.  Use the [[Template/Unbulleted list|unbulleted list template]] to make a list of performers.
|-
| *Music*           || If there was live music for the show, list the musician or musicians here.
|-
| *Run*     || The time frame of its initial run -- e.g., "Jan/Feb 2010".
|-
| *Subsequent Runs*     || The time frame(s) of its subsequent run(s) -- e.g., "Jan/Feb 2010".  If there are multiple subsequent runs, use the [[Template/Unbulleted list|unbulleted list template]] to create a list.
|}
</noinclude>

<div>
	<table class="infobox" class="infobox-show" style="background-color: #dff">
		<tr>
			<th colspan="2" class="infobox-header">{{{Name|Show Name}}}</th>
		</tr>
		<tr class="">
			<td colspan="2" class="infobox-picture">
				![[{{{Picture]]
			</td>
		</tr>
{{#if: {{{Theater|}}} |
		<tr class="">
			<th scope="row" style="text-align:left; vertical-align: top;">Theater</th>
			<td class="category">{{{Theater|Unknown}}}</td>
		</tr>
|}}
		<tr class="">
			<th scope="row" class="category-header">Directed by</th>
			<td class="category">{{{Director|Unknown}}}</td>
		</tr>
{{#if: {{{Assistant Director|}}} |
		<tr class="">
			<th scope="row" class="category-header">Assistant Director(s)</th>
			<td class="category">{{{Assistant Director|Unknown}}}</td>
		</tr>
|}}
{{#if: {{{Producer|}}} |
		<tr class="">
			<th scope="row" class="category-header">Produced by</th>
			<td class="category">{{{Producer|Unknown}}}</td>
		</tr>
|}}
		<tr class="">
			<th scope="row" class="category-header">Initial Run</th>
			<td class="category">{{{Run|Unknown}}}</td>
		</tr>
{{#if: {{{Subsequent Runs|}}} |
		<tr class="">
			<th scope="row" class="category-header">Subsequent Run(s)</th>
			<td class="category">{{{Subsequent Runs|Unknown}}}</td>
		</tr>
|}}
{{#if: {{{Tech|}}} |
		<tr class="">
			<th scope="row" class="category-header">Crew</th>
			<td class="category">{{{Tech|Unknown}}}</td>
		</tr>
|}}
{{#if: {{{Music|}}} |
		<tr class="">
			<th scope="row" class="category-header">Music By</th>
			<td class="category">{{{Music|Unknown}}}</td>
		</tr>
|}}
		<tr class="">
			<th scope="row" class="category-header">Cast</th>
			<td class="category">{{{Cast|Unknown}}}</td>
		</tr>
	</table>
</div>