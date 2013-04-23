<noinclude>
## Usage
This template lists standard, useful information about an improv troupe.
<pre>
{{Infobox Troupe
|Name	=		
|Picture	=
|Cast	=		
|Years	=		
}}
</pre>


## Attributes
{| class="wikitable" style="line-height:1.3em;"
!style="background:gray; text-align:left;"| Parameter
!style="background:gray; text-align:left;"| Explanation
|-
| *Name*       || The name of the troupe.
|-
| *Picture*           || A picture of the troupe.
|-
| *Cast*           || Who's in the troupe. To include a list of people, use [[Template/Unbulleted list|Template:Unbulleted list]].
|-
| *Years*     || The years that the troupe was active, for instance "1993-1997".  If it's still in operation, set it to something like "1998-Present".
|}
</noinclude>

<div>
	<table class="infobox infobox-troupe">
		<tr>
			<th class="infobox-header" colspan="2">{{{Name|Troupe Name}}}</th>
		</tr>
		<tr class="">
			<td colspan="2" class="infobox-picture">
				![[{{{Picture]]
			</td>
		</tr>
		<tr class="">
			<th class="category-header" scope="row">Years Active</th>
			<td class="category">{{{Years|Unknown}}}</td>
		</tr>
{{#if: {{{Director|}}} |
		<tr class="">
			<th class="category-header" scope="row">Directed by</th>
			<td class="category">{{{Director|Unknown}}}</td>
		</tr>
|}}
		<tr class="">
			<th class="category-header" scope="row">Cast</th>
			<td class="category">{{{Cast|Unknown}}}</td>
		</tr>
	</table>
</div>