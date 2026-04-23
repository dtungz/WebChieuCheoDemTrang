import fitz
import sys
import glob
import os

sys.stdout.reconfigure(encoding='utf-8')

docs_dir = r"f:\Git\WebsiteMaSoi\docs"
all_pdfs = sorted(glob.glob(os.path.join(docs_dir, "*.pdf")))

with open('flashcards.txt', 'w', encoding='utf-8') as f:
    for pdf_path in all_pdfs:
        basename = os.path.basename(pdf_path)
        if basename.startswith("5.") or basename.startswith("6."):
            f.write("=" * 80 + "\n")
            f.write(f"FILE: {basename}\n")
            f.write("=" * 80 + "\n")
            doc = fitz.open(pdf_path)
            for i, page in enumerate(doc):
                text = page.get_text()
                if text.strip():
                    f.write(f"\n--- PAGE {i+1} ---\n")
                    f.write(text + "\n")
            doc.close()
