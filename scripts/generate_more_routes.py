import json,itertools,pathlib
base=pathlib.Path(__file__).resolve().parents[1]
airports=json.loads((base/'airports.json').read_text())
routes=base/'routes_more'; routes.mkdir(exist_ok=True)
count=0
for a,b in itertools.permutations(airports,2):
 slug=f"{a['slug']}-to-{b['slug']}"; (routes/f'{slug}.html').write_text(f'<html><body><h1>{a['city']} ({a['code']}) to {b['city']} ({b['code']})</h1></body></html>'); count+=1
 if count>=100000: break
print(count)
