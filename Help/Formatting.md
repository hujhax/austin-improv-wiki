## Basic Wiki Formatting
Here's a quick list of some of the most useful ways to format text in a wiki page.

[This site](http://www.mediawiki.org/wiki/Help:Formatting) lists a more complete list of features.

{| class="wikitable"
! Description
! width=40% | You type
! width=40% | You get
|-
! colspan="3" style="background:#ABE" | character (inline) formatting – *applies anywhere*
|-
| Italic text
| <pre>
*italic*
</pre>
|
*italic*
|-
| Bold text
| <pre>
**bold**
</pre>
|
**bold**
|-
| Bold and italic
| <pre>
***bold & italic***
</pre>
|
***bold & italic***
|-
| Escape wiki markup
| <pre>
&lt;nowiki&gt;no *markup*&lt;/nowiki&gt;
</pre>
|
<nowiki>no *markup*</nowiki>
|-
! colspan="3" style="background:#ABE" | section formatting – *only at the beginning of the line*
|-
| Headings of different levels 
| <pre>

## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
</pre>
|

## Level 2
### Level 3
#### Level 4
##### Level 5
###### Level 6
|-
| Bullet list
|
<pre>
* Start each line
* with an [[Wikipedia - asterisk|asterisk]] (*).
	* More asterisks gives deeper
		* and deeper levels.
* Line breaks<br />don't break levels.
		* But jumping levels creates empty space.
Any other start ends the list.
</pre>
|
* Start each line
* with an [[Wikipedia - asterisk|asterisk]] (*).
	* More asterisks gives deeper
		* and deeper levels.
* Line breaks<br />don't break levels.
		* But jumping levels creates empty space.
Any other start ends the list.
|-
| Numbered list
|
<pre>
1. Start each line
1. with a [[Wikipedia - Number sign|number sign]] (#).
	1. More number signs gives deeper
		1. and deeper
		1. levels.
1. Line breaks<br />don't break levels.
		1. But jumping levels creates empty space.
1. Blank lines

1. end the list and start another.
Any other start also
ends the list.
</pre>
|
1. Start each line
1. with a [[Wikipedia - Number sign|number sign]] (#).
	1. More number signs gives deeper
		1. and deeper
		1. levels.
1. Line breaks<br />don't break levels.
		1. But jumping levels creates empty space.
1. Blank lines

1. end the list and start another.
Any other start also
ends the list.
|}

## Links
Here's a quick list of how to make some simple links.

[This site](http://www.mediawiki.org/wiki/Help:Links) lists a more complete list of features.


{| border="1" class="wikitable"
!Description
!You type
!You get
|-
|Internal link
|<pre>[[Main Page]]</pre>
|[[Main Page]]
|-
|Piped link 
|<pre>[[Main Page|different text]]</pre>
|[[Main Page|different text]]
|-
|External link
|<tt><nowiki>http://mediawiki.org</nowiki></tt>
|http://mediawiki.org
|-
|External link with different label
|<tt><nowiki>[MediaWiki](http://mediawiki.org)</nowiki></tt>
|[MediaWiki](http://mediawiki.org)
|}

## Infoboxes
You may be wondering how to make those little colorful "information boxes" depicted on (for example) the troupe, theater, and performer pages.

To do that, you just include an "infobox" template at the top of the page.  For a performer, that text might look like this:
 <nowiki><div>
	<table class="infobox infobox-performer">
		<tr>
			<th colspan="2" class="infobox-header">John Doe</th>
		</tr>
		<tr class="">
			<td colspan="2" class="" class="infobox-picture">
				<a class="internal-link" href="File/John Doe Pic.jpg.md"><img src="File/John%20Doe%20Pic.jpg" alt="" style="max-width: 220px; height: auto; display: block; margin: 0 auto;" /></a>
			</td>
		</tr>
		<tr class="">
			<th scope="row" class="category-header">Primary Theater</th>
			<td class="category"><a class="internal-link" href="The Hideout Theatre">The Hideout Theatre</a></td>
		</tr>
		<tr class="">
			<th scope="row" class="category-header">Years Active</th>
			<td class="category">2008-Present</td>
		</tr>
	</table>
</div></nowiki>

For more information about infoboxes, check the documentation on infoboxes for [[Template/Infobox Troupe|troupes]], [[Template/Infobox Performer|performers]], [[Template/Infobox Show|shows]], and [[Template/Infobox Theater|theaters]].