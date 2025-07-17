export default function PropsFooter({ items }) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
}
/*
	
<h4 >DC COMICS</h4>
               			<ul>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
	
	*/
