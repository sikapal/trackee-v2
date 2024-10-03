package com.example.demo.Print;


import java.awt.Graphics;
import java.awt.Graphics2D;

import org.springframework.stereotype.Component;

import java.awt.*;
import java.awt.print.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.print.DocFlavor;
import javax.print.DocPrintJob;
import javax.print.PrintException;
import javax.print.PrintService;
import javax.print.PrintServiceLookup;
import javax.print.event.PrintJobAdapter;
import javax.print.event.PrintJobEvent;
import javax.print.SimpleDoc;
import javax.print.attribute.standard.Copies;
import javax.swing.*;
import javax.print.*;
import javax.print.attribute.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import com.example.demo.model.Package;


@Component
public class PrintingService extends JPanel implements Printable, ActionListener {

	    //JButton ok = new JButton("OK");
	    Image image = null;
	    Image image1 = null;

	    public PrintingService() {
	        //ok.addActionListener(this);
	        this.setPreferredSize(new Dimension(600, 800));
	        //this.add(ok);
	        /*
	        JLabel label = new JLabel();
	        JLabel label1 = new JLabel();
	        JLabel label2 = new JLabel();
	        JLabel label3 = new JLabel();

	        this.setLayout(null);

	        label.setFont(new Font("Arial", Font.PLAIN, 29));
	        label.setText("ID colis : PPTT000014");
	        //
	        label1.setFont(new Font("Arial", Font.PLAIN, 29));
	        label1.setText("Prix colis : 1500XAF");
	        //
	        label2.setFont(new Font("Arial", Font.PLAIN, 29));
	        label2.setText("Poids colis : 100g");
	        //
	        label3.setFont(new Font("Arial", Font.PLAIN, 29));
	        label3.setText("Destination : Edea");
	        //

	        Dimension size = label.getPreferredSize();
	        label.setBounds(200, 130, size.width, size.height);
	        //
	        label.setBounds(100, 200, size.width, size.height);
	        label1.setBounds(100, 270, size.width, size.height);
	        label2.setBounds(100, 350, size.width, size.height);
	        label3.setBounds(100, 4400, size.width, size.height);
	        this.add(label);
	        this.add(label1);
	        this.add(label2);
	        this.add(label3);

	        JFrame frame = new JFrame("Print");
	        frame.getContentPane().add(this);
	        frame.pack();
	        frame.setVisible(false);*/
	    }

	    public void launch(File file, Package P) throws IOException {
	        new PrintingService();
	        //
	        JLabel label = new JLabel();
	        JLabel label1 = new JLabel();
	        JLabel label2 = new JLabel();
	        JLabel label3 = new JLabel();

	        this.setLayout(null);

	        label.setFont(new Font("Arial", Font.PLAIN, 29));
	        label.setText("ID colis : "+P.getNumSerie());
	        //
	        label1.setFont(new Font("Arial", Font.PLAIN, 29));
	        label1.setText("Prix colis : 1500XAF");
	        //
	        label2.setFont(new Font("Arial", Font.PLAIN, 29));
	        label2.setText("Poids colis : 100g");
	        //
	        label3.setFont(new Font("Arial", Font.PLAIN, 29));
	        label3.setText("Destination : Edea");
	        //

	        Dimension size = label.getPreferredSize();
	        label.setBounds(200, 130, size.width, size.height);
	        //
	        label.setBounds(100, 200, size.width, size.height);
	        label1.setBounds(100, 270, size.width, size.height);
	        label2.setBounds(100, 350, size.width, size.height);
	        label3.setBounds(100, 4400, size.width, size.height);
	        this.add(label);
	        this.add(label1);
	        this.add(label2);
	        this.add(label3);

	        JFrame frame = new JFrame("Print");
	        frame.getContentPane().add(this);
	        frame.pack();
	        frame.setVisible(false);
	        //
	        BufferedImage bufferedImage = ImageIO.read(new File("logo.png"));
	        image = bufferedImage.getScaledInstance(100, 100, Image.SCALE_DEFAULT);
	        
	        //
	        BufferedImage bufferedImage2 = ImageIO.read(file);
	        image1 = bufferedImage2.getScaledInstance(100, 100, Image.SCALE_DEFAULT);
	        //
	        PrinterJob printJob = PrinterJob.getPrinterJob();
	        printJob.setPrintable(this);
	        if (printJob.printDialog()) {
	            try {
	                printJob.print();
	            } catch (Exception ex) {
	                throw new RuntimeException(ex);
	            }
	        }
	    }

	    @Override
	    protected void paintComponent(Graphics g) {
	      super.paintComponent(g);
	      g.drawImage(image, 250, 0, this);
	      g.drawImage(image1, 250, 400, this);
	    }
	    
	    public void actionPerformed(ActionEvent e) {


	        PrinterJob printJob = PrinterJob.getPrinterJob();
	        printJob.setPrintable(this);
	        if (printJob.printDialog()) {
	            try {
	                printJob.print();
	            } catch (Exception ex) {
	                throw new RuntimeException(ex);
	            }
	        }
	    }

	    public int print(Graphics g, PageFormat pf, int index) throws
	            PrinterException {

	        Graphics2D g2 = (Graphics2D) g;
	        if (index >= 1) {
	            return Printable.NO_SUCH_PAGE;
	        } else {

	            this.printAll(g2);
	            return Printable.PAGE_EXISTS;
	        }

	    }	
   public void print(File str) throws PrintException,
         IOException{

      PrintService ps=PrintServiceLookup.lookupDefaultPrintService();
      DocPrintJob job=ps.createPrintJob();
      job.addPrintJobListener(new PrintJobAdapter() {
      public void printDataTransferCompleted(PrintJobEvent event){
         System.out.println("data transfer complete");
      }
      public void printJobNoMoreEvents(PrintJobEvent event){
            System.out.println("received no more events");
         }
      });
      FileInputStream fis=new FileInputStream(str);
      System.out.println("location pdf : "+str);
      //Doc doc=new SimpleDoc(fis, DocFlavor.INPUT_STREAM.AUTOSENSE, null);
      Doc doc=new SimpleDoc(fis, DocFlavor.INPUT_STREAM.JPEG, null);
      PrintRequestAttributeSet attrib=new HashPrintRequestAttributeSet();
      attrib.add(new Copies(1));
      job.print(doc, attrib);
   }
   }/*
   
	public BufferedImage addTextToImage(BufferedImage i, String text, String path) throws IOException {

	    /*final int VERTICLE_PADDING_PIXELS = 5;
	    final int LEFT_MARGIN_PIXELS = 5;

	    FontMetrics fm = i.createGraphics().getFontMetrics();

	    int width = i.getWidth();
	    int height = i.getHeight()
	            + (text.length * (fm.getHeight() + VERTICLE_PADDING_PIXELS));

	    for (String s : text) {
	        width = Math.max(width, fm.stringWidth(s) + LEFT_MARGIN_PIXELS);
	    }

	    BufferedImage result = new BufferedImage(i.getHeight(), width, height);

	    Graphics2D g = result.createGraphics();

	    g.drawImage(i, 0, 0, null);

	    for (int x = 0; x < text.length; x++) {
	        g.drawString(text[x], LEFT_MARGIN_PIXELS, i.getHeight() + (x + 1) *VERTICLE_PADDING_PIXELS + x*fm.getHeight());
	    }

	    return result;*/
	/*
		Font font = new Font("Arial", Font.BOLD, 18);

		Graphics g = i.getGraphics();
		g.setFont(font);
		g.setColor(Color.GREEN);
		g.drawString(text, 0, 4);
		return i;
	}*/
	

